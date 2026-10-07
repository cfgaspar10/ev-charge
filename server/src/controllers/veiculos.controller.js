const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Gera slug/id único baseado na marca e modelo
function gerarIdVeiculo(brand, model) {
  const base = `${brand}_${model}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '_')     // substitui caracteres especiais por _
    .replace(/^_+|_+$/g, '');        // remove _ no início e fim
  return base;
}

// Lista todos os veículos ativos ordenados por marca e modelo
async function listarVeiculos(req, res) {
  try {
    const { todos } = req.query; // se admin passar ?todos=true lista inclusive inativos
    const where = todos === 'true' ? {} : { active: true };

    const veiculos = await prisma.veiculo.findMany({
      where,
      orderBy: [
        { brand: 'asc' },
        { model: 'asc' }
      ]
    });
    return res.json(veiculos);
  } catch (error) {
    console.error('Erro ao listar veículos do banco:', error);
    return res.status(500).json({ erro: 'Falha interna ao carregar catálogo de veículos.' });
  }
}

// Retorna detalhes de um veículo específico por ID
async function obterVeiculoPorId(req, res) {
  try {
    const { id } = req.params;
    const veiculo = await prisma.veiculo.findUnique({
      where: { id }
    });

    if (!veiculo) {
      return res.status(404).json({ erro: 'Veículo não encontrado.' });
    }

    return res.json(veiculo);
  } catch (error) {
    console.error('Erro ao buscar veículo por ID:', error);
    return res.status(500).json({ erro: 'Falha ao buscar veículo.' });
  }
}

// Criação de novo veículo (Apenas Administrador)
async function criarVeiculo(req, res) {
  try {
    const { brand, model, type, battery, maxAc, maxDc, range, idCustomizado } = req.body;

    if (!brand || !model || !type || battery === undefined || maxAc === undefined || maxDc === undefined || range === undefined) {
      return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    const tipoPadronizado = String(type).toUpperCase();
    if (!['BEV', 'PHEV'].includes(tipoPadronizado)) {
      return res.status(400).json({ erro: 'O tipo deve ser "BEV" (100% Elétrico) ou "PHEV" (Híbrido Plug-in).' });
    }

    const id = idCustomizado && idCustomizado.trim() !== '' 
      ? idCustomizado.trim() 
      : gerarIdVeiculo(brand, model);

    // Verifica se já existe
    const existente = await prisma.veiculo.findUnique({ where: { id } });
    if (existente) {
      return res.status(409).json({ erro: `Já existe um veículo cadastrado com o identificador "${id}".` });
    }

    const novoVeiculo = await prisma.veiculo.create({
      data: {
        id,
        brand: brand.trim(),
        model: model.trim(),
        type: tipoPadronizado,
        battery: parseFloat(battery),
        maxAc: parseFloat(maxAc),
        maxDc: parseFloat(maxDc),
        range: parseInt(range, 10),
        active: true
      }
    });

    return res.status(201).json({
      mensagem: 'Veículo cadastrado com sucesso!',
      veiculo: novoVeiculo
    });
  } catch (error) {
    console.error('Erro ao criar veículo:', error);
    return res.status(500).json({ erro: 'Falha ao cadastrar novo veículo no banco de dados.' });
  }
}

// Atualização de veículo existente (Apenas Administrador)
async function atualizarVeiculo(req, res) {
  try {
    const { id } = req.params;
    const { brand, model, type, battery, maxAc, maxDc, range, active } = req.body;

    const dataToUpdate = {};
    if (brand !== undefined) dataToUpdate.brand = brand.trim();
    if (model !== undefined) dataToUpdate.model = model.trim();
    if (type !== undefined) dataToUpdate.type = String(type).toUpperCase();
    if (battery !== undefined) dataToUpdate.battery = parseFloat(battery);
    if (maxAc !== undefined) dataToUpdate.maxAc = parseFloat(maxAc);
    if (maxDc !== undefined) dataToUpdate.maxDc = parseFloat(maxDc);
    if (range !== undefined) dataToUpdate.range = parseInt(range, 10);
    if (active !== undefined) dataToUpdate.active = Boolean(active);

    const atualizado = await prisma.veiculo.update({
      where: { id },
      data: dataToUpdate
    });

    return res.json({
      mensagem: 'Veículo atualizado com sucesso!',
      veiculo: atualizado
    });
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    return res.status(500).json({ erro: 'Falha ao atualizar dados do veículo.' });
  }
}

// Remoção / desativação de veículo (Apenas Administrador)
async function deletarVeiculo(req, res) {
  try {
    const { id } = req.params;
    const { permanente } = req.query;

    if (permanente === 'true') {
      await prisma.veiculo.delete({ where: { id } });
      return res.json({ mensagem: 'Veículo removido permanentemente do banco de dados.' });
    }

    // Por padrão faz soft-delete (desativação)
    const desativado = await prisma.veiculo.update({
      where: { id },
      data: { active: false }
    });

    return res.json({ mensagem: 'Veículo desativado com sucesso.', veiculo: desativado });
  } catch (error) {
    console.error('Erro ao desativar veículo:', error);
    return res.status(500).json({ erro: 'Falha ao remover veículo.' });
  }
}

// Verificação de autenticação de administrador
function verificarAdmin(req, res) {
  return res.json({
    sucesso: true,
    mensagem: 'Autenticação de administrador realizada com sucesso.'
  });
}

module.exports = {
  listarVeiculos,
  obterVeiculoPorId,
  criarVeiculo,
  atualizarVeiculo,
  deletarVeiculo,
  verificarAdmin
};
