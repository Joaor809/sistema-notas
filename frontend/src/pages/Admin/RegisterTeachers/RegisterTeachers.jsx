import Form from "../../../components/Form/Form";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import "./RegisterTeachers.css";

function RegisterTeachers(){
    return(
        <div className="RegisterTeachers">
            <NavbarAdmin/>
            <main className="RegisterTeachers-form">
                <Form cabecalho="Professor"/>
            </main>
        </div>
    );
}

export default RegisterTeachers;