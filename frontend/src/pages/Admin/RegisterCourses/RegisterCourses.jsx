import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./RegisterCourses.css";

function RegisterCourses(props) {
  function confirmRegister(event) {
    event.preventDefault();
    const confirm = window.confirm("Deseja realmente registrar este curso?");
    if (confirm) {
      event.target.submit();
    } else {
      alert("Cadastro cancelado.");
    }
  }
  return (
    <div className="RegisterCourses">
      <NavbarAdmin />
      <div className="card-form">
        <form action={props.action} method="post" onSubmit={confirmRegister}>
          <div className="form-group">
            <label>Nome do curso</label>
            <input
              type="text"
              id="nameCourse"
              placeholder="Ex: Técnico em Informática"
            />
          </div>
          <div className="btn">
            <button type="submit">Registrar curso</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCourses;
