import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./RegisterDisciplines.css";

function RegisterDisciplines(props) {
  function confirmarCadastro(event) {
    event.preventDefault();
    const confirmar = window.confirm("Deseja realmente registrar essa disciplina?");
    if (confirmar) {
      event.target.submit();
    } else {
      alert("Cadastro cancelado.");
    }
  }
  return (
    <div className="RegisterDisciplines">
      <NavbarAdmin />
      <div className="card-form">
        <form action={props.action} method="post" onSubmit={confirmarCadastro}>
          <div className="form-group">
            <label>Nome da disciplina</label>
            <input
              type="text"
              id="nameDisciplines"
              placeholder="Ex: Sistemas Operacionais"
            />
          </div>
          <div className="btn">
            <button type="submit">Registrar disciplina</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterDisciplines;
