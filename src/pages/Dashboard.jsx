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
