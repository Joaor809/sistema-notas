import { useState, useEffect } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./CoursesDisciplines.css";

function CoursesDisciplines(props) {
  const [courses, setCourses] = useState([]);
  const [disciplines, setDisciplines] = useState([]);

  async function searchCourses() {
    const response = await fetch("http://localhost:3000/cursos");
    const data = await response.json();
    setCourses(data);
  }
  async function searchDiscipline() {
    const response = await fetch("http://localhost:3000/disciplinas");
    const data = await response.json(); 
    setDisciplines(data);
  }

  useEffect(() => {
    searchCourses();
    searchDiscipline();
  })

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
    <div className="CoursesDisciplines">
      <NavbarAdmin />
      <div className="card-form">
        <form action={props.action} method="post">
          <div className="form-group">
            <label>Curso</label>
            <select id="selectCourse">
              <option disabled selected>Selecionar curso...</option>
              {courses.map((element) => {
                return <option key={element.id} value={element.id}>{element.nome}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Disciplina</label>
            <select id="selectDiscipline">
              <option disabled selected>Selecionar disciplina...</option>
              {disciplines.map((element) => {
                return <option key={element.id} value={element.id}>{element.nome}</option>
              })}
            </select>
          </div>
          <div className="btn">
            <button type="submit">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoursesDisciplines;
