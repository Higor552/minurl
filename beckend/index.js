import { prisma } from "./lib/prisma.js";

async function testarBanco() {
  try {
    console.log("1. Criando usuário...");
    const usuario = await prisma.user.create({
      data: {
        email: "higor@exemplo.com",
        passwordHash: "senha123",
      },
    });
    console.log("Usuário criado:", usuario.id);

    console.log("\n2. Criando jogo...");
    const jogo = await prisma.game.create({
      data: {
        title: "Life is Strange",
        developer: "Dontnod",
      },
    });
    console.log("Jogo criado:", jogo.id);

    console.log("\n3. Registrando uma jogatina...");
    const jogatina = await prisma.jogatina.create({
      data: {
        userId: usuario.id,
        gameId: jogo.id,
        decisaoPrincipal: "Sacrificou Arcadia Bay",
        finalObtido: "Fugiu com a Chloe",
      },
    });
    console.log("Jogatina salva:", jogatina.id);

    console.log("\n4. Buscando o histórico completo do usuário...");
    const historico = await prisma.user.findUnique({
      where: { id: usuario.id },
      include: {
        jogatinas: {
          include: { game: true }
        }
      }
    });
    console.log(JSON.stringify(historico, null, 2));

  } catch (erro) {
    console.error("Deu algum erro:", erro);
  } finally {
    // Desconecta do banco no final do teste
    await prisma.$disconnect();
  }
}

// Executa a função
testarBanco();