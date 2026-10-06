const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Lista todos os veículos ativos ordenados por marca e modelo
async function listarVeiculos(req, res) {
  try {
    const veiculos = await prisma.veiculo.findMany({
      where: { active: true },
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

module.exports = {
  listarVeiculos,
  obterVeiculoPorId
};
