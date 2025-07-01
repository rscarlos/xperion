import { useState } from "react";

export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      mensaje: "Tu cambio de S/ 1,000 a USD se completó.",
      tipo: "exito",
    },
    {
      id: 2,
      mensaje: "Tu wallet recibió un depósito de S/ 500.",
      tipo: "exito",
    },
    {
      id: 3,
      mensaje: "Recordatorio: Tu cambio programado se ejecutará mañana.",
      tipo: "advertencia",
    },
    {
      id: 4,
      mensaje: "Error al procesar el cambio de S/ 2,500. Intenta nuevamente.",
      tipo: "error",
    },
  ]);

  const getColor = (tipo) => {
    switch (tipo) {
      case "exito":
        return "text-green-600";
      case "advertencia":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      default:
        return "text-neutral-600";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notificaciones</h1>

      <ul className="space-y-4">
        {notificaciones.map((n) => (
          <li
            key={n.id}
            className={`flex justify-between items-center p-4 rounded border shadow-sm hover:bg-neutral-50`}
          >
            <span>{n.mensaje}</span>
            <span className={getColor(n.tipo)}>
              {n.tipo === "exito" && "✔️"}
              {n.tipo === "advertencia" && "⚠️"}
              {n.tipo === "error" && "❌"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
