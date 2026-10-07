-- CreateTable
CREATE TABLE "solicitacoes_veiculos" (
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
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "solicitacoes_veiculos_pkey" PRIMARY KEY ("id")
);
