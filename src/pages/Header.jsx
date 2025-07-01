import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">
          <Link to="/">FintechCambio</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-700">Dashboard</Link>
              <Link to="/nueva-operacion" className="hover:text-blue-700">Nueva Operación</Link>
              <Link to="/historial" className="hover:text-blue-700">Historial</Link>
              <Link to="/notificaciones" className="hover:text-blue-700">Notificaciones</Link>
              <Link to="/referidos" className="hover:text-blue-700">Referidos</Link>

              <button
                onClick={handleLogout}
                className="text-blue-700 hover:underline"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/empresas" className="hover:text-blue-700">Empresas</Link>
              <Link to="/tipo-cambio" className="hover:text-blue-700">Tipo de Cambio</Link>
              <Link to="/articulos" className="hover:text-blue-700">Artículos</Link>
              <Link to="/ayuda" className="hover:text-blue-700">Ayuda</Link>
              <Link to="/nosotros" className="hover:text-blue-700">Nosotros</Link>

              <button
                onClick={() => navigate('/login')}
                className="text-blue-700 hover:underline"
              >
                Ingresar
              </button>
              <button
                onClick={() => navigate('/login')}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Registrarse
              </button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Dashboard</Link> 
              <Link to="/historial" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Historial</Link>
              <Link to="/notificaciones" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Notificaciones</Link>
              <Link to="/referidos" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Referidos</Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-blue-700 hover:underline"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/empresas" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Empresas</Link>
              <Link to="/tipo-cambio" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Tipo de Cambio</Link>
              <Link to="/articulos" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Artículos</Link>
              <Link to="/ayuda" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Ayuda</Link>
              <Link to="/nosotros" onClick={() => setMenuOpen(false)} className="block hover:text-blue-700">Nosotros</Link>

              <button
                onClick={() => {
                  navigate('/login');
                  setMenuOpen(false);
                }}
                className="w-full text-blue-700 hover:underline"
              >
                Ingresar
              </button>
              <button
                onClick={() => {
                  navigate('/register');
                  setMenuOpen(false);
                }}
                className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Registrarse
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
