import { useState, useEffect } from "react";

export default function Tasas() {
  const [tasaCompra, setTasaCompra] = useState(3.72);
  const [tasaVenta, setTasaVenta] = useState(3.76);
  const [monto, setMonto] = useState("");
  const [resultado, setResultado] = useState(null);
  const [tipoOperacion, setTipoOperacion] = useState("compra");

  // Simular actualización de tasas cada 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      const nuevaCompra = (3.70 + Math.random() * 0.05).toFixed(2);
      const nuevaVenta = (3.74 + Math.random() * 0.05).toFixed(2);
      setTasaCompra(parseFloat(nuevaCompra));
      setTasaVenta(parseFloat(nuevaVenta));
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

  const handleSimular = () => {
    if (monto === "" || isNaN(monto)) {
      alert("Ingrese un monto válido");
      return;
    }
    const valor =
      tipoOperacion === "compra"
        ? (parseFloat(monto) / tasaVenta).toFixed(2)
        : (parseFloat(monto) * tasaCompra).toFixed(2);
    setResultado(valor);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tasas en Tiempo Real</h1>

      <div className="bg-neutral-50 p-4 rounded shadow mb-6">
        <p className="text-lg">
          <strong>Tasa Compra USD:</strong> {tasaCompra}
        </p>
        <p className="text-lg">
          <strong>Tasa Venta USD:</strong> {tasaVenta}
        </p>
        <p className="text-sm text-neutral-500">
          *Las tasas se actualizan automáticamente cada 10 segundos.
        </p>
      </div>

      {/* Simulador */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Simula tu Cambio</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select
            value={tipoOperacion}
            onChange={(e) => setTipoOperacion(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="compra">Quiero comprar dólares</option>
            <option value="venta">Quiero vender dólares</option>
          </select>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto en soles o dólares"
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={handleSimular}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Calcular
          </button>
        </div>
        {resultado && (
          <div className="mt-2">
            <p className="text-lg">
              {tipoOperacion === "compra"
                ? `Obtendrás $${resultado} USD`
                : `Obtendrás S/ ${resultado} soles`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
