create database sistema_notas;
use sistema_notas;

create table alunos(
    id int auto_increment primary key,
    nome varchar(200) not null,
    cpf char(11) not null unique,
    email varchar(150) not null unique,
    telefone varchar(20) not null unique,
    data_nascimento date not null
);

create table professores(
    id int auto_increment primary key,
    nome varchar(200) not null,
    cpf char(11) not null unique,
    email varchar(150) not null unique,
    telefone varchar(20) not null unique,
    data_nascimento date not null
);

create table cursos(
    id int auto_increment primary key,
    nome varchar(100) not null unique
);

create table disciplinas(
    id int auto_increment primary key,
    nome varchar(100) not null unique
);

create table cursos_disciplinas(
    id int not null,
    id int not null,
    foreign key (idCurso) references cursos(idCurso),
    foreign key (idDisciplina) references disciplinas(idDisciplina),
    primary key(idCurso, idDisciplina)
);

create table turmas(
    id int auto_increment primary key,
    idCurso int not null,
    nome varchar(20) not null,
    ano year not null,
    foreign key (idCurso) references cursos(idCurso)
);

create table matricula(
    id int auto_increment primary key,
    idAluno int not null,
    idTurma int not null,
    foreign key (idAluno) references alunos(id),
    foreign key (idTurma) references turmas(id)
);

create table turma_disciplina(
    id int auto_increment primary key,
    idTurma int not null,
    idDisciplina int not null,
    idProfessor int not null,
    foreign key (idTurma) references turmas(id),
    foreign key (idDisciplina) references disciplinas(id),
    foreign key (idProfessor) references professores(id)
);

create table notas(
    id int auto_increment primary key,
    idAluno int not null,
    idTurmaDisciplina int not null,
    bimestre enum("1° Bimestre", "2° Bimestre", "3° Bimestre", "4° Bismestre") not null,
    nota decimal(4,2) not null,
    foreign key (idAluno) references alunos(id),
    foreign key (idTurmaDisciplina) references turma_disciplina(id)
);


create table usuarios(
    id int auto_increment primary key,
    idProfessor int not null unique,
    cpf char(11) not null,
    senha varchar(50) not null,
    foreign key (idProfessor) references professores(id);
);

drop database sistema_notas;