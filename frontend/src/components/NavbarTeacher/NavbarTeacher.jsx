import "./NavbarTeacher.css";
import { useState } from "react";

function NavbarTeacher() {
  const [abertoTurmas, setAbertoTurmas] = useState(false);
  const [abertoNotas, setAbertoNotas] = useState(false);
  const [abertoConta, setAbertoConta] = useState(false);
  return (
    <nav className="navbar">
      <h3>Sistema de Notas</h3>
      <div className="nav-links">
        <a href="">Dashboard</a>
        <div className="dropdown">
          <button onClick={() => setAbertoTurmas(!abertoTurmas)}>Minhas turmas</button>
          {abertoTurmas && (
            <div className="dropdown-menu">
                <a href="">Turmas</a>
                <a href="">Disciplinas</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setAbertoNotas(!abertoNotas)}>Notas</button>
          {abertoNotas && (
            <div className="dropdown-menu">
                <a href="">Lançar notas</a>
                <a href="">Consultar notas</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setAbertoConta(!abertoConta)}>Minhas turmas</button>
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

export default NavbarTeacher;
