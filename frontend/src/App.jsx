import { BrowserRouter, Routes, Route, } from "react-router-dom";
import RegisterStudents from "./pages/Admin/RegisterTeachers/RegisterTeachers";
import RegisterTeachers from "./pages/Admin/RegisterStudents/RegisterStudents";
import RegisterCourses from "./pages/Admin/RegisterCourses/RegisterCourses";
import RegisterDisciplines from "./pages/Admin/RegisterDisciplines/RegisterDisciplines";
import CoursesDisciplines from "./pages/Admin/CoursesDisciplines/CoursesDisciplines";
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterDisciplines/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;
