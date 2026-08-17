import "./RegisterStudents.css";
import NavbarAdmin from "./../../../components/NavbarAdmin/NavbarAdmin";
import Form from "./../../../components/Form/Form"

function RegisterStudents(){
    return(
        <div className="RegisterStudents">
            <NavbarAdmin/>
            <main className="RegisterStudents-form">
                <Form cabecalho="Aluno" />
            </main>
        </div>
    );
}

export default RegisterStudents;
