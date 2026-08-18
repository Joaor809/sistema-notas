import { useState, useEffect } from "react";
import "./Registration.css";
import NavbarAdmin from "./../../../components/NavbarAdmin/NavbarAdmin";

export default function Registration(props) {
    const [student, setStudent] = useState([]);
    const [classe, setClasse] = useState([]);

    async function searchStudents(){
        const response = await fetch("http://localhost:3000/alunos");
        const data = await response.json();
        setStudent(data)
    }
    async function searchClasses(){
        const response = await fetch("http://localhost:3000/turmas");
        const data = await response.json();
        setClasse(data)
    }

    useEffect(() => {
        searchStudents();
        searchClasses();
    })
    return(
        <div className="Registration">
            <NavbarAdmin/>
            <div className="card-form">
                <form action={props.action} method="post">
                    <div className="form-group">
                        <label>Aluno</label>
                        <select id="student">
                            <option disabled selected defaultValue>Selecionar aluno</option>
                            {student.map((element) => {
                                return <option key={element.id} value={element.id}>{element.nome}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Turma</label>
                        <select id="classe">
                            <option disabled selected defaultValue>Selecionar turma</option>
                            {classe.map((element) => {
                                return <option key={element.id} value={element.id}>{element.nome}</option>
                            })}
                        </select>
                    </div>
                    <div className="btn">
                        <button type="submit">Registrar matrícula</button>
                    </div>
                </form>
            </div>
        </div>
    );
}