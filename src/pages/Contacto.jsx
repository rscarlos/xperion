export default function Contacto() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p className="mb-4">¿Tienes alguna duda o consulta? Contáctanos.</p>
      <form className="flex flex-col gap-4 max-w-lg">
        <input className="border p-2 rounded" placeholder="Nombre completo" />
        <input className="border p-2 rounded" placeholder="Correo electrónico" />
        <textarea className="border p-2 rounded" placeholder="Tu mensaje" rows={5}></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}