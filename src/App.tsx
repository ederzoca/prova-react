import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import CadastroUsuario from "./Paginas/CriarUsuarioPagina";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App