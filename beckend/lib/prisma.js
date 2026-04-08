import 'dotenv/config'; 
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// 1. Cria a conexão usando a biblioteca nativa do PostgreSQL
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// 2. Transforma essa conexão em um adaptador que o Prisma entende
const adapter = new PrismaPg(pool);

// 3. Cria o PrismaClient usando as novas regras da versão 7
const prisma = new PrismaClient({ adapter });

export { prisma };