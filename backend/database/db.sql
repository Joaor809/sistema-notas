create database sistema_notas;
use sistema_notas;

create table alunos(
    idAluno int auto_increment primary key,
    nome varchar(200) not null,
    cpf char(11) not null unique,
    email varchar(150) not null unique,
    telefone varchar(20) not null unique,
    data_nascimento date not null
);

create table professores(
    idProfessor int auto_increment primary key,
    nome varchar(200) not null,
    cpf char(11) not null unique,
    email varchar(150) not null unique,
    telefone varchar(20) not null unique,
    data_nascimento data not null
);

create table cursos(
    idCurso int auto_increment primary key,
    nome varchar(100) not null unique
);

create table disciplinas(
    idDisciplina int auto_increment primary key,
    nome varchar(100) not null unique
);

create table cursos_disciplinas(
    idCurso int not null primary key,
    idDisciplina int not null primary key,
    foreign key idCurso references cursos(idCurso),
    foreign key idDisciplina references disciplinas(idDisciplina)
);

create table turmas(
    idTurma int auto_increment primary key,
    idCurso int not null,
    nome varchar(20) not null,
    ano year not null,
    foreign key (idCurso) references cursos(idCurso)
);

create table matricula(
    idMatricula int auto_increment primary key,
    idAluno int not null,
    idTurma int not null,
    foreign key (idAluno) references alunos(idAluno),
    foreign key (idTurma) references turmas(idTurma)
);

create table turma_disciplina(
    idTurmaDisciplina int auto_increment primary key,
    idTurma int not null,
    idDisciplina int not null,
    idProfessor int not null,
    foreign key (idTurma) references turmas(idTurma),
    foreign key (idDisciplina) references disciplinas(idDisciplina),
    foreign key (idProfessor) references professores(idProfessor)
);

create table notas(
    idNota int auto_increment primary key,
    idAluno int not null,
    idTurmaDisciplina int not null,
    bimestre enum("1° Bimestre", "2° Bimestre", "3° Bimestre", "4° Bismestre") not null,
    nota decimal(4,2) not null,
    foreign key (idAluno) references alunos(idAluno),
    foreign key (idTurmaDisciplina) references turma_disciplina(idTurmaDisciplina)
);

