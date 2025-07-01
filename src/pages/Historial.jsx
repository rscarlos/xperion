import { useState } from "react";

export default function Historial() {
  const [operaciones] = useState([
    { id: 1, fecha: "30/06/2025", operacion: "Cambio PEN a USD", monto: "S/ 2,000 → $530.00", estado: "Completado" },
    { id: 2, fecha: "29/06/2025", operacion: "Depósito a Wallet", monto: "S/ 1,000.00", estado: "Completado" },
    { id: 3, fecha: "28/06/2025", operacion: "Cambio PEN a USD", monto: "S/ 3,500 → $933.33", estado: "Completado" },
    { id: 4, fecha: "27/06/2025", operacion: "Cambio PEN a USD", monto: "S/ 5,000 → $1,333.33", estado: "Pendiente" },
    { id: 5, fecha: "26/06/2025", operacion: "Cambio PEN a USD", monto: "S/ 2,000 → $530.00", estado: "Error" },
    { id: 6, fecha: "25/06/2025", operacion: "Cambio PEN a USD", monto: "S/ 6,000 → $1,600.00", estado: "Completado" },
  ]);

  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const operacionesFiltradas = operaciones.filter((op) => {
    const coincideEstado = filtro ? op.estado === filtro : true;
    const coincideBusqueda =
      op.operacion.toLowerCase().includes(busqueda.toLowerCase()) ||
      op.monto.toLowerCase().includes(busqueda.toLowerCase());
    return coincideEstado && coincideBusqueda;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historial de Operaciones</h1>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Todos los estados</option>
          <option value="Completado">Completado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Error">Error</option>
        </select>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar operación o monto"
          className="border p-2 rounded flex-1"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-neutral-200">
          <thead>
            <tr className="bg-neutral-100">
              <th className="p-3 text-left border-b">Fecha</th>
              <th className="p-3 text-left border-b">Operación</th>
              <th className="p-3 text-left border-b">Monto</th>
              <th className="p-3 text-left border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {operacionesFiltradas.map((op) => (
              <tr key={op.id} className="hover:bg-neutral-50">
                <td className="p-3 border-b">{op.fecha}</td>
                <td className="p-3 border-b">{op.operacion}</td>
                <td className="p-3 border-b">{op.monto}</td>
                <td
                  className={`p-3 border-b ${
                    op.estado === "Completado"
                      ? "text-green-600"
                      : op.estado === "Pendiente"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {op.estado}
                </td>
              </tr>
            ))}
            {operacionesFiltradas.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
