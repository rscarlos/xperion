import { useState } from "react";

export default function Dashboard() {
  const [montoSoles, setMontoSoles] = useState("");
  const [tipoCambio, setTipoCambio] = useState(3.75);
  const [resultado, setResultado] = useState(null);

  const handleSimular = () => {
    if (montoSoles === "" || isNaN(montoSoles)) {
      alert("Por favor ingresa un monto válido.");
      return;
    }
    const monto = parseFloat(montoSoles) / tipoCambio;
    setResultado(monto.toFixed(2));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Simulador de Cambio */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simulador de Cambio</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="number"
            value={montoSoles}
            onChange={(e) => setMontoSoles(e.target.value)}
            placeholder="Monto en soles"
            className="border p-2 rounded w-full md:w-1/3"
          />
          <input
            type="number"
            step="0.01"
            value={tipoCambio}
            onChange={(e) => setTipoCambio(e.target.value)}
            placeholder="Tipo de cambio"
            className="border p-2 rounded w-full md:w-1/3"
          />
          <button
            onClick={handleSimular}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Calcular
          </button>
        </div>
        {resultado && (
          <div className="mt-4">
            <p className="text-lg">
              Recibirás: <span className="font-bold">${resultado} USD</span>
            </p>
          </div>
        )}
      </div>

      {/* Resumen de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-neutral-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Operaciones Totales</h3>
          <p className="text-3xl font-bold mt-2">25</p>
        </div>
        <div className="bg-neutral-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Monto Cambiado</h3>
          <p className="text-3xl font-bold mt-2">S/ 50,000</p>
        </div>
        <div className="bg-neutral-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Monto USD Entregado</h3>
          <p className="text-3xl font-bold mt-2">$ 13,333</p>
        </div>
      </div>
    </div>
  );
}
