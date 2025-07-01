import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Crear Cuenta</h1>

        <input type="text" placeholder="Nombre completo" className="w-full border px-4 py-3 rounded-lg mb-4" />
        <input type="email" placeholder="Correo electrónico" className="w-full border px-4 py-3 rounded-lg mb-4" />
        <input type="password" placeholder="Contraseña" className="w-full border px-4 py-3 rounded-lg mb-6" />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Crear Cuenta
        </button>

        <p className="text-center text-sm mt-4">
          ¿Ya tienes una cuenta?{' '}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
}
