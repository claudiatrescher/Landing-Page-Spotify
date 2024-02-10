
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagina_inicial from './Pagina_inicial/Pagina_inicial';
import Pagina_registro from './Pagina_registro/Pagina_registro';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Pagina_inicial/>} />
          <Route path="/Pagina_registro" element={<Pagina_registro/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;





