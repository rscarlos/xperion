import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSimularLogin = () => {
    login();
    const from = location.state?.from;
    if (from) {
      navigate(from);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-[#4B2991] text-center">Iniciar Sesión</h1>
        <p className="mb-4 text-center text-sm text-neutral-500">(Simulación de inicio de sesión)</p>
        <button
          onClick={handleSimularLogin}
          className="w-full bg-[#4B2991] text-white py-3 rounded-lg hover:bg-[#3a227a] transition"
        >
          Simular que me he logueado
        </button>
      </div>
    </div>
  );
}