import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Landing() {
  const [tasaCompra, setTasaCompra] = useState(3.72);
  const [tasaVenta, setTasaVenta] = useState(3.76);
  const [soles, setSoles] = useState('');
  const [dolares, setDolares] = useState('');

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleOperacion = () => {
    if (isAuthenticated) {
      navigate('/nueva-operacion');
    } else {
      navigate('/login', { state: { from: '/nueva-operacion' } });
    }
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      const nuevaCompra = (3.70 + Math.random() * 0.05).toFixed(2);
      const nuevaVenta = (3.74 + Math.random() * 0.05).toFixed(2);
      setTasaCompra(parseFloat(nuevaCompra));
      setTasaVenta(parseFloat(nuevaVenta));
    }, 10000);
    return () => clearInterval(intervalo);
  }, []);

  const handleSolesChange = (e) => {
    const value = e.target.value;
    setSoles(value);
    if (value === '' || isNaN(value)) {
      setDolares('');
    } else {
      setDolares((parseFloat(value) / tasaVenta).toFixed(2));
    }
  };

  const handleDolaresChange = (e) => {
    const value = e.target.value;
    setDolares(value);
    if (value === '' || isNaN(value)) {
      setSoles('');
    } else {
      setSoles((parseFloat(value) * tasaCompra).toFixed(2));
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#002b5b] flex flex-col items-center justify-center px-4 md:px-8 py-10">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-center justify-between">
        <div className="flex-1 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            El mejor <span className="text-cyan-400">tipo de cambio</span> para cambiar{' '}
            <span className="text-cyan-400">dólares y soles online</span>
          </h1>
          <p className="text-base sm:text-lg">
            Seguro, rápido y con la mejor tasa. Operaciones 100% online desde cualquier lugar.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full">
          <h2 className="text-xl font-semibold text-center mb-6">
            Tipo de cambio hoy en Perú
          </h2>
          <div className="text-center mb-4 text-sm text-neutral-500">
            Compra: <span className="font-bold">{tasaCompra}</span> | Venta:{' '}
            <span className="font-bold">{tasaVenta}</span>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1 font-medium block">Tú Envías</label>
              <input
                type="number"
                value={soles}
                onChange={handleSolesChange}
                placeholder="S/ 0.00"
                className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border-neutral-300 w-full"
              />
            </div>

            <div>
              <label className="mb-1 font-medium block">Tú Recibes</label>
              <input
                type="number"
                value={dolares}
                onChange={handleDolaresChange}
                placeholder="$ 0.00"
                className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border-neutral-300 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleOperacion}
            className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition"
          >
            Iniciar operación
          </button>

          <div className="text-center text-xs text-neutral-500 mt-4">
            Registrados en la SBS y la UIF
          </div>
        </div>
      </div>
    </div>
  );
}
