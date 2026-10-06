-- CreateTable
CREATE TABLE "veiculos" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "battery" DOUBLE PRECISION NOT NULL,
    "maxAc" DOUBLE PRECISION NOT NULL,
    "maxDc" DOUBLE PRECISION NOT NULL,
    "range" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veiculos_pkey" PRIMARY KEY ("id")
);
