import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

// Isso permite que o servidor entenda dados enviados em formato JSON
app.use(express.json());

// Rota básica para testar se o servidor está no ar
app.get("/", (req, res) => {
  res.send("Servidor de Monitoramento de Jogos Narrativos rodando!");
});

// 1. Rota para CRIAR um usuário (substitui aquela primeira parte do seu teste)
app.post("/usuarios", async (req, res) => {
  try {
    const { email, passwordHash } = req.body; // Pega os dados que vieram na requisição
    
    const usuario = await prisma.user.create({
      data: {
        email,
        passwordHash,
      },
    });
    
    res.status(201).json(usuario);
  } catch (erro) {
    res.status(500).json({ erro: "Falha ao criar usuário" });
  }
});

// 2. Rota para BUSCAR o histórico de um usuário pelo ID
app.get("/usuarios/:id/historico", async (req, res) => {
  try {
    const userId = parseInt(req.params.id); // Pega o ID da URL
    
    const historico = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        jogatinas: {
          include: { game: true }
        }
      }
    });
    
    if (!historico) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    
    res.json(historico);
  } catch (erro) {
    res.status(500).json({ erro: "Falha ao buscar histórico" });
  }
});

// Define a porta onde o servidor vai rodar e "liga" ele
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});