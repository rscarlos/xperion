export default function Configuracion() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      <div className="flex flex-col gap-4">
        <input className="border p-2" placeholder="Nombre completo" />
        <input className="border p-2" placeholder="Correo electrónico" />
        <input className="border p-2" placeholder="Teléfono" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Guardar Cambios</button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Seguridad</h2>
        <input className="border p-2 mb-2" type="password" placeholder="Contraseña actual" />
        <input className="border p-2 mb-2" type="password" placeholder="Nueva contraseña" />
        <input className="border p-2 mb-4" type="password" placeholder="Confirmar nueva contraseña" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Cambiar Contraseña</button>
      </div>
    </div>
  );
}
