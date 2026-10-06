# ==============================================================================
# Multi-stage Dockerfile para EV Charging Calculator
# ==============================================================================

# Estágio 1: Dependências e Compilação do Prisma
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache openssl

COPY server/package*.json ./
COPY server/prisma ./prisma/

RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
RUN npx prisma generate

# Estágio 2: Runtime de Produção
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache openssl

COPY server/package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY server/src ./src
COPY server/prisma ./prisma
COPY client ../client

EXPOSE 3000

# Executa migrações do banco, seed de veículos e inicia a API
CMD ["sh", "-c", "npx prisma migrate deploy && node prisma/seed.js && node src/index.js"]
