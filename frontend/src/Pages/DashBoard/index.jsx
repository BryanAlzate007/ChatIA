import Layout from "../../Components/Layout"

function DashBoard() {
  return (
    <Layout>
         // Contenedor principal: usa flexbox para el layout sidebar + contenido
    // h-screen asegura que ocupe toda la altura de la ventana
    // flex-col en mobile, flex-row en pantallas medias (md) y superiores
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900"> {/* Añadido dark mode bg */}

      {/* Barra Lateral (Sidebar) */}
      {/* w-64: ancho fijo en pantallas md+ */}
      {/* bg-gray-800: fondo oscuro (cambia el color si quieres) */}
      {/* text-white: texto blanco */}
      {/* flex flex-col p-4: flexbox para los items de navegación internos, padding */}
      {/* fixed inset-y-0 left-0: la fija a la izquierda y ocupa toda la altura */}
      {/* overflow-y-auto: permite scroll si el contenido de la barra lateral es muy largo */}
      {/* hidden md:flex: oculta en mobile por defecto, visible como flexbox en md+ */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 fixed inset-y-0 left-0 overflow-y-auto hidden md:flex dark:bg-gray-800"> {/* Añadido dark mode bg */}
        {/* Título o Logo del Dashboard */}
        <div className="text-2xl font-semibold mb-6 text-center">
          Mi Dashboard
        </div>

        {/* Navegación del Sidebar */}
        <nav className="flex flex-col space-y-2">
          {/* Ejemplo de Item de Navegación */}
          {/* Usa <Link> o <NavLink> si usas react-router-dom */}
          <a href="#" className="hover:bg-gray-700 rounded px-4 py-2 transition duration-200 dark:hover:bg-gray-700"> {/* Añadido padding horizontal y vertical, hover effect, transition */}
            Inicio
          </a>
          <a href="#" className="hover:bg-gray-700 rounded px-4 py-2 transition duration-200 dark:hover:bg-gray-700">
            Configuración
          </a>
          <a href="#" className="hover:bg-gray-700 rounded px-4 py-2 transition duration-200 dark:hover:bg-gray-700">
            Usuarios
          </a>
          {/* Agrega más enlaces según las secciones de tu dashboard */}
        </nav>

        {/* Puedes añadir un botón de Logout aquí */}
        {/* <div className="mt-auto pt-4 border-t border-gray-700">
            <button className="w-full text-left hover:bg-gray-700 rounded px-4 py-2 transition duration-200">
                Cerrar Sesión
            </button>
        </div> */}

      </aside>

      {/* Área de Contenido Principal */}
      {/* flex-grow: hace que ocupe todo el espacio restante horizontalmente en md+ */}
      {/* p-6: padding general dentro del área de contenido */}
      {/* mt-16 (mobile): Espacio para un posible header fijo arriba en mobile (ajustar si no tienes header) */}
      {/* md:mt-0: Quita el margen superior en md+ */}
      {/* md:ml-64: Margen izquierdo en md+ para dejar espacio a la barra lateral fija */}
      {/* overflow-y-auto: permite scroll si el contenido principal es muy largo */}
      <main className="flex-grow p-6 mt-16 md:mt-0 md:ml-64 overflow-y-auto dark:text-gray-200"> {/* Añadido dark mode text */}
        {/* Contenido dentro del dashboard */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"> {/* Añadido dark mode text */}
          Bienvenido al Dashboard
        </h1>

        {/* Aquí puedes agregar tus widgets o secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo de Widget/Tarjeta */}
          <div className="bg-white p-4 rounded shadow dark:bg-gray-700 dark:text-white"> {/* Añadido dark mode bg/text */}
            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100"> {/* Añadido dark mode text */}
              Resumen Rápido
            </h2>
            <p>Este es un widget de ejemplo.</p>
          </div>

          <div className="bg-white p-4 rounded shadow dark:bg-gray-700 dark:text-white"> {/* Añadido dark mode bg/text */}
            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100"> {/* Añadido dark mode text */}
              Estadísticas
            </h2>
            <p>Aquí irían tus gráficos.</p>
          </div>

          <div className="bg-white p-4 rounded shadow dark:bg-gray-700 dark:text-white"> {/* Añadido dark mode bg/text */}
            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100"> {/* Añadido dark mode text */}
              Tareas Pendientes
            </h2>
            <p>Lista de items.</p>
          </div>

          {/* Agrega más widgets según sea necesario */}
        </div>

        {/* Puedes añadir más secciones de contenido aquí */}
        <div className="mt-8 bg-white p-4 rounded shadow dark:bg-gray-700 dark:text-white"> {/* Añadido dark mode bg/text */}
             <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100"> {/* Añadido dark mode text */}
              Tabla de Datos
            </h2>
            <p>Contenido de tabla iría aquí.</p>
        </div>

      </main>
    </div>
    </Layout>
  )
}

export default DashBoard
