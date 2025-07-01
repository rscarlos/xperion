import { useState } from "react";

export default function Referidos() {
  const [referidos] = useState([
    { id: 1, nombre: "Juan Pérez", estado: "Activo" },
    { id: 2, nombre: "Ana Torres", estado: "Pendiente" },
    { id: 3, nombre: "Carlos Ruiz", estado: "Activo" },
    { id: 4, nombre: "María López", estado: "Pendiente" },
    { id: 5, nombre: "Luis Fernández", estado: "Activo" },
  ]);

  const enlaceReferido = "https://fintechcambio.com/r/TUCODIGO";
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");

  const copiarEnlace = () => {
    navigator.clipboard.writeText(enlaceReferido);
    alert("Enlace copiado al portapapeles.");
  };

  const referidosFiltrados = referidos.filter((r) => {
    const coincideNombre = r.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtro ? r.estado === filtro : true;
    return coincideNombre && coincideEstado;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Referidos</h1>

      <div className="bg-neutral-100 p-4 rounded mb-6">
        <p className="mb-2">Comparte tu enlace de referido:</p>
        <div className="flex items-center gap-2">
          <input
            readOnly
            value={enlaceReferido}
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={copiarEnlace}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Copiar
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Todos los estados</option>
          <option value="Activo">Activo</option>
          <option value="Pendiente">Pendiente</option>
        </select>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre"
          className="border p-2 rounded flex-1"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Mis Referidos</h2>
      <table className="w-full table-auto border border-neutral-200">
        <thead>
          <tr className="bg-neutral-100">
            <th className="p-3 text-left border-b">Nombre</th>
            <th className="p-3 text-left border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          {referidosFiltrados.map((r) => (
            <tr key={r.id} className="hover:bg-neutral-50">
              <td className="p-3 border-b">{r.nombre}</td>
              <td
                className={`p-3 border-b ${
                  r.estado === "Activo"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {r.estado}
              </td>
            </tr>
          ))}
          {referidosFiltrados.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center p-4">
                No se encontraron resultados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
