// App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Landing from './Landing';
import Empresas from './pages/Empresas';
import TipoCambio from './pages/TipoCambio';
import Articulos from './pages/Articulos';
import Ayuda from './pages/Ayuda';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Register from './pages/Register';
import NuevaOperacion from './pages/NuevaOperacion';
import { AuthProvider, useAuth } from './AuthContext';


const isAuthenticated = false; // Esto debe cambiarse luego por la lógica real de auth

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-3xl font-bold text-[#4B2991] cursor-pointer">
        <Link to="/">FintechCambio</Link>
      </div>
      <div className="flex gap-6">
        <Link className="text-[#4B2991] hover:underline" to="/empresas">Empresas</Link>
        <Link className="text-[#4B2991] hover:underline" to="/tipo-cambio">Tipo de cambio</Link>
        <Link className="text-[#4B2991] hover:underline" to="/articulos">Artículos</Link>
        <Link className="text-[#4B2991] hover:underline" to="/ayuda">Ayuda</Link>
        <Link className="text-[#4B2991] hover:underline" to="/nosotros">Nosotros</Link>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login')}
          className="text-[#4B2991] hover:underline"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => navigate('/register')}
          className="border border-[#4B2991] px-4 py-1 rounded-lg text-[#4B2991] hover:bg-[#4B2991] hover:text-white transition"
        >
          Crear Cuenta
        </button>
      </div>
    </header>
  );
}

function LandingWithLogic() {
  const navigate = useNavigate();

  const handleOperacion = () => {
    if (isAuthenticated) {
      navigate('/nueva-operacion');
    } else {
      navigate('/login');
    }
  };

  return <Landing onOperacion={handleOperacion} />;
}

export default function App() {
  return (
    <AuthProvider>
        <Router>
        <Header />

        <Routes>
            <Route path="/" element={<LandingWithLogic />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/tipo-cambio" element={<TipoCambio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nueva-operacion" element={<NuevaOperacion />} />
        </Routes>

        <footer className="bg-neutral-50 p-6 text-center text-sm text-neutral-500">
            © 2025 FintechCambio - Todos los derechos reservados |
            <Link className="hover:underline mx-1" to="/empresas">Empresas</Link> |
            <Link className="hover:underline mx-1" to="/tipo-cambio">Tipo de cambio</Link> |
            <Link className="hover:underline mx-1" to="/articulos">Artículos</Link> |
            <Link className="hover:underline mx-1" to="/ayuda">Ayuda</Link> |
            <Link className="hover:underline mx-1" to="/nosotros">Nosotros</Link>
        </footer>
        </Router>
    </AuthProvider>
  );
}
