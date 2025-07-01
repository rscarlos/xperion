// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { RutaPrivada } from './RutaPrivada';

import Landing from './Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import NuevaOperacion from './pages/NuevaOperacion';
import Empresas from './pages/Empresas';
import TipoCambio from './pages/TipoCambio';
import Articulos from './pages/Articulos';
import Ayuda from './pages/Ayuda';
import Nosotros from './pages/Nosotros';
import Header from './pages/Header'; 
 
import Dashboard from './pages/Dashboard';
import Historial from './pages/Historial';
import Notificaciones from './pages/Notificaciones';
import Referidos from './pages/Referidos';
 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/tipo-cambio" element={<TipoCambio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/nosotros" element={<Nosotros />} />

          {/* Private Routes */}
          <Route path="/dashboard" element={<RutaPrivada><Dashboard /></RutaPrivada>} />
          <Route path="/nueva-operacion" element={<RutaPrivada><NuevaOperacion /></RutaPrivada>} />
          <Route path="/historial" element={<RutaPrivada><Historial /></RutaPrivada>} />
          <Route path="/notificaciones" element={<RutaPrivada><Notificaciones /></RutaPrivada>} />
          <Route path="/referidos" element={<RutaPrivada><Referidos /></RutaPrivada>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
