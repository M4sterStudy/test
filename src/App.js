import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import Inicio from './Pages/Inicio/Inicio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inico" element={<Inicio />} />
        {/* ... otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
