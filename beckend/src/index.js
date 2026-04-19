import { prisma } from "../lib/prisma.js";


async function criarUsuario(email, passwordHash) {
  const usuario = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });
  
  console.log(`Usuário criado: ${usuario.email}`);
  return usuario;
}

async function buscarHistorico(userId) {
  const historico = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      jogatinas: {
        include: { game: true }
      }
    }
  });
  
  if (!historico) {
    throw new Error("Usuário não encontrado");
  }
  
  console.log(`Histórico encontrado para o usuário: ${historico.email}`);
  return historico;
}

async function main() {
  const novoUsuario = await criarUsuario("m@examplo.com", "hashDeSenha123");
  await buscarHistorico(novoUsuario.id);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });