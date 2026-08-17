import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const cursos = [
    {
        id: 1,
        nome: "Técnico em Informática"
    },
    {
        id: 2,
        nome: "Técnico em Agropecuária"
    },
    {
        id: 3,
        nome: "Técnico em Administração"
    }
];

const disciplinas = [
    {
        id: 1,
        nome: "Programação"
    },
    {
        id: 2,
        nome: "Banco de Dados"
    },
    {
        id: 3,
        nome: "Redes de Computadores"
    },
    {
        id: 4,
        nome: "Matemática"
    }
];

app.get("/cursos", (req, res) => {
    res.json(cursos);
});

app.get("/disciplinas", (req, res) => {
    res.json(disciplinas);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});