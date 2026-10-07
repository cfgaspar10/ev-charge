const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let tabelaInicializada = false;

// Garante que a tabela solicitacoes_veiculos exista no PostgreSQL
async function garantirTabela() {
  if (tabelaInicializada) return;
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "solicitacoes_veiculos" (
        "id" SERIAL NOT NULL,
        "userName" TEXT,
        "userEmail" TEXT,
        "brand" TEXT NOT NULL,
        "model" TEXT NOT NULL,
        "type" TEXT,
        "battery" DOUBLE PRECISION,
        "sourceUrl" TEXT,
        "notes" TEXT,
        "status" TEXT NOT NULL DEFAULT 'PENDENTE',
        "adminNotes" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "solicitacoes_veiculos_pkey" PRIMARY KEY ("id")
      );
    `);
    tabelaInicializada = true;
  } catch (error) {
    console.error('Erro ao verificar/criar tabela solicitacoes_veiculos:', error);
  }
}

// Cria uma nova solicitação enviada por qualquer usuário/visitante
async function criarSolicitacao(req, res) {
  try {
    await garantirTabela();
    const { userName, userEmail, brand, model, type, battery, sourceUrl, notes } = req.body;

    if (!brand || !brand.trim()) {
      return res.status(400).json({ erro: 'A marca do veículo é obrigatória.' });
    }

    if (!model || !model.trim()) {
      return res.status(400).json({ erro: 'O modelo/versão do veículo é obrigatório.' });
    }

    const brandLimpa = brand.trim();
    const modelLimpo = model.trim();
    const userNameLimpo = userName ? userName.trim() : null;
    const userEmailLimpo = userEmail ? userEmail.trim().toLowerCase() : null;
    const typeLimpo = type ? type.trim().toUpperCase() : null;
    const batteryNum = battery ? parseFloat(battery) : null;
    const sourceUrlLimpo = sourceUrl ? sourceUrl.trim() : null;
    const notesLimpo = notes ? notes.trim() : null;

    const resultado = await prisma.$queryRaw`
      INSERT INTO "solicitacoes_veiculos" (
        "userName", "userEmail", "brand", "model", "type", "battery", "sourceUrl", "notes", "status", "createdAt", "updatedAt"
      ) VALUES (
        ${userNameLimpo}, ${userEmailLimpo}, ${brandLimpa}, ${modelLimpo}, ${typeLimpo}, ${batteryNum}, ${sourceUrlLimpo}, ${notesLimpo}, 'PENDENTE', NOW(), NOW()
      )
      RETURNING *;
    `;

    const solicitacaoCriada = resultado[0];

    return res.status(201).json({
      mensagem: 'Solicitação de inclusão de veículo enviada com sucesso! O administrador avaliará os dados.',
      solicitacao: solicitacaoCriada
    });
  } catch (error) {
    console.error('Erro ao criar solicitação de veículo:', error);
    return res.status(500).json({ erro: 'Erro interno ao salvar solicitação de veículo.' });
  }
}

// Lista solicitações para o painel de administração
async function listarSolicitacoes(req, res) {
  try {
    await garantirTabela();
    const { status } = req.query;

    let solicitacoes;
    if (status && ['PENDENTE', 'APROVADA', 'REJEITADA'].includes(status.toUpperCase())) {
      const statusFiltro = status.toUpperCase();
      solicitacoes = await prisma.$queryRaw`
        SELECT * FROM "solicitacoes_veiculos"
        WHERE "status" = ${statusFiltro}
        ORDER BY "createdAt" DESC;
      `;
    } else {
      solicitacoes = await prisma.$queryRaw`
        SELECT * FROM "solicitacoes_veiculos"
        ORDER BY 
          CASE WHEN "status" = 'PENDENTE' THEN 0 ELSE 1 END,
          "createdAt" DESC;
      `;
    }

    return res.json(solicitacoes);
  } catch (error) {
    console.error('Erro ao listar solicitações:', error);
    return res.status(500).json({ erro: 'Erro interno ao listar solicitações.' });
  }
}

// Retorna o contador de solicitações pendentes
async function contarPendentes(req, res) {
  try {
    await garantirTabela();
    const resultado = await prisma.$queryRaw`
      SELECT COUNT(*)::int AS total FROM "solicitacoes_veiculos"
      WHERE "status" = 'PENDENTE';
    `;
    const total = resultado[0]?.total || 0;
    return res.json({ pendentes: total });
  } catch (error) {
    console.error('Erro ao contar solicitações pendentes:', error);
    return res.status(500).json({ erro: 'Erro interno ao contar solicitações.' });
  }
}

// Atualiza o status de uma solicitação (ex: APROVADA, REJEITADA)
async function atualizarStatusSolicitacao(req, res) {
  try {
    await garantirTabela();
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
      return res.status(400).json({ erro: 'ID da solicitação inválido.' });
    }

    if (!status || !['PENDENTE', 'APROVADA', 'REJEITADA'].includes(status.toUpperCase())) {
      return res.status(400).json({ erro: 'Status inválido. Use PENDENTE, APROVADA ou REJEITADA.' });
    }

    const statusValido = status.toUpperCase();
    const notesValido = adminNotes !== undefined ? adminNotes : null;

    const resultado = await prisma.$queryRaw`
      UPDATE "solicitacoes_veiculos"
      SET "status" = ${statusValido},
          "adminNotes" = COALESCE(${notesValido}, "adminNotes"),
          "updatedAt" = NOW()
      WHERE "id" = ${idNum}
      RETURNING *;
    `;

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({ erro: 'Solicitação não encontrada.' });
    }

    return res.json({
      mensagem: `Solicitação marcada como ${statusValido} com sucesso.`,
      solicitacao: resultado[0]
    });
  } catch (error) {
    console.error('Erro ao atualizar status da solicitação:', error);
    return res.status(500).json({ erro: 'Erro interno ao atualizar solicitação.' });
  }
}

// Remove uma solicitação
async function excluirSolicitacao(req, res) {
  try {
    await garantirTabela();
    const { id } = req.params;
    const idNum = parseInt(id, 10);

    if (isNaN(idNum)) {
      return res.status(400).json({ erro: 'ID da solicitação inválido.' });
    }

    const resultado = await prisma.$queryRaw`
      DELETE FROM "solicitacoes_veiculos"
      WHERE "id" = ${idNum}
      RETURNING "id";
    `;

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({ erro: 'Solicitação não encontrada.' });
    }

    return res.json({
      mensagem: 'Solicitação excluída com sucesso.',
      id: idNum
    });
  } catch (error) {
    console.error('Erro ao excluir solicitação:', error);
    return res.status(500).json({ erro: 'Erro interno ao excluir solicitação.' });
  }
}

module.exports = {
  criarSolicitacao,
  listarSolicitacoes,
  contarPendentes,
  atualizarStatusSolicitacao,
  excluirSolicitacao
};
