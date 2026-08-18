import { useEffect, useState } from "react";
import "./Classes.css";
import NavbarAdmin from "./../../../components/NavbarAdmin/NavbarAdmin";

export default function Classes(props) {
  const [courses, setCourses] = useState([]);

  async function searchCourses(){
    const response = await fetch("http://localhost:3000/courses");
    const data = await response.json();
    setCourses(data);
  }
  useEffect(() => {
    searchCourses();
  })
  return (
    <div className="Classes">
      <NavbarAdmin />
      <div className="card-form">
        <form action={props.action} method="post">
          <div className="form-group">
            <label>Curso</label>
            <select id="course">
              <option disabled selected defaultValue>Selecionar curso</option>
              {courses.map((element) => {
                return <option key={element.id} value={element.id}>{element.nome}</option>
              })}
            </select>
          </div>
          <div className="form-group-grid">
            <div className="form-group">
              <label>Nome da turma</label>
              <input type="text" id="nameClasse" />
            </div>
            <div className="form-group">
              <label>Nome da turma</label>
              <input type="number" id="yearClasse" />
            </div>
          </div>
          <div className="btn">
            <button type="submit">Cadastrar turma</button>
          </div>
        </form>
      </div>
    </div>
  );
}
