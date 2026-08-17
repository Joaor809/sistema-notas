import "./NavbarAdmin.css";
import { useState } from "react";

function NavbarAdmin() {
    const [abertoCadastros, setAbertoCadastros] = useState(false)
    const [abertoAcademico, setAbertoAcademico] = useState(false)
    const [abertoNotas, setAbertoNotas] = useState(false)
    const [abertoConta, setAbertoConta] = useState(false)
  return (
    <nav className="navbar">
      <h3>Sistema de Notas</h3>
      <div className="nav-links">
        <a href="">Dashboard</a>
        <div className="dropdown">
          <button onClick={() => setAbertoCadastros(!abertoCadastros)}>Minhas turmas</button>
          {abertoCadastros && (
            <div className="dropdown-menu">
                <a href="">Alunos</a>
                <a href="">Professores</a>
                <a href="">Cursos</a>
                <a href="">Disciplinas</a>
                <a href="">Cursos e Disciplinas</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setAbertoAcademico(!abertoAcademico)}>Acadêmico</button>
          {abertoAcademico && (
            <div className="dropdown-menu">
                <a href="">Turmas</a>
                <a href="">Matrículas</a>
                <a href="">Turmas e disciplinas</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setAbertoNotas(!abertoNotas
          )}>Notas</button>
          {abertoNotas && (
            <div className="dropdown-menu">
                <a href="">Consultar notas</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setAbertoConta(!abertoConta
          )}>Conta</button>
          {abertoConta && (
            <div className="dropdown-menu">
                <a href="">Meu perfil</a>
                <a href="">Sair</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
