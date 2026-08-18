import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let turmas = [
  {
    id: 1,
    idCurso: 1,
    nome: "Informática 1A",
    ano: 2026
  },
  {
    id: 2,
    idCurso: 1,
    nome: "Informática 1B",
    ano: 2026
  },
  {
    id: 3,
    idCurso: 2,
    nome: "Administração 2A",
    ano: 2026
  }
];

let alunos = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "12345678901",
    email: "joao@email.com",
    telefone: "35999999999",
    data_nascimento: "2009-05-15"
  },
  {
    id: 2,
    nome: "Maria Santos",
    cpf: "98765432100",
    email: "maria@email.com",
    telefone: "35988888888",
    data_nascimento: "2008-10-20"
  }
];

app.get("/turmas", (req, res) => {
  res.json(turmas);
});

app.get("/alunos", (req, res) => {
  res.json(alunos);
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});