// NuevaOperacion.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NuevaOperacion() {
  const [soles, setSoles] = useState('');
  const [dolares, setDolares] = useState('');
  const tasaVenta = 3.5520;

  const navigate = useNavigate();

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
      setSoles((parseFloat(value) * tasaVenta).toFixed(2));
    }
  };

  const handleIniciarOperacion = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#4B2991]">Nueva operación</h1>
        <div className="flex justify-between text-sm mb-4">
          <span>Dólar compra: 3.5230</span>
          <span>Dólar venta: 3.5520</span>
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">¿Cuentas con un cupón o código de referidos?</label>
          <div className="flex gap-2">
            <input type="text" className="border px-4 py-2 rounded-lg w-full" placeholder="Ingrese código" />
            <button className="bg-[#4B2991] text-white px-4 rounded-lg">Aplicar</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Envío soles (S/)</label>
            <input
              type="number"
              value={soles}
              onChange={handleSolesChange}
              className="border px-4 py-3 rounded-lg w-full"
              placeholder="S/ 0.00"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Recibo dólares ($)</label>
            <input
              type="number"
              value={dolares}
              onChange={handleDolaresChange}
              className="border px-4 py-3 rounded-lg w-full"
              placeholder="$ 0.00"
            />
          </div>
        </div>

        <p className="text-sm text-center mb-4">Gana $3.17 más que en el banco.</p>

        <div className="flex flex-col gap-4 mb-6">
          <button className="border border-[#4B2991] rounded-lg px-4 py-2 text-[#4B2991] hover:bg-[#4B2991] hover:text-white transition">
            Agregar cuenta bancaria soles +
          </button>
          <button className="border border-[#4B2991] rounded-lg px-4 py-2 text-[#4B2991] hover:bg-[#4B2991] hover:text-white transition">
            Agregar cuenta bancaria dólares +
          </button>
        </div>

        <div className="mb-4 text-sm">
          <input id="declaracion-check" type="checkbox" className="mr-2" />
          Declaro bajo juramento que los fondos involucrados en la operación provienen de actividades lícitas en
          conformidad con la normativa peruana y las regulaciones de prevención de lavado de activos en el país.
        </div>

        <button
          onClick={handleIniciarOperacion}
          className="w-full bg-[#4B2991] text-white py-3 rounded-lg hover:bg-[#3a227a] transition"
        >
          Iniciar operación
        </button>
      </div>
    </div>
  );
}
