  import { BrowserRouter, Routes, Route, } from "react-router-dom";
  import NavbarAdmin from "./components/NavbarAdmin/NavbarAdmin";
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/testes" element={<NavbarAdmin/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;
