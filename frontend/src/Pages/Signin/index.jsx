import React, { useState } from 'react'; 
import Layout from "../../Components/Layout"

function Signin() {
  const [email, setEmail] = useState(''); // Estado para el email/usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para manejar errores

    // Función que se ejecuta al hacer clic en el botón "Entrar"
    const handleLogin = async () => {
      setError(null); // Limpia errores previos
      try {
        const response = await fetch('http://localhost:8000/api/token/', { // <--- AJUSTA LA URL DEL BACKEND
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // Envía los datos en formato JSON
            username: email, // O 'email', dependiendo de cómo autentique tu backend
            password: password,
          }),
        });
  
        if (!response.ok) {
          // Si la respuesta no es exitosa (ej: 401 Unauthorized, 400 Bad Request)
          const errorData = await response.json();
          setError(errorData.detail || 'Error en el inicio de sesión'); // Muestra el mensaje de error del backend
          return; // Detiene la ejecución
        }
  
        // Si la respuesta es exitosa (status 200 OK)
        const data = await response.json();
        console.log('Login exitoso:', data);
  
        // Guarda los tokens recibidos (generalmente en localStorage o un estado global)
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
  
        // Redirige al usuario a otra página (ej: dashboard)
        // Tendrás que usar algo como useHistory o useNavigate de react-router-dom
        // history.push('/dashboard'); // Ejemplo con react-router-dom v5
        // navigate('/dashboard'); // Ejemplo con react-router-dom v6
        alert('¡Inicio de sesión exitoso! Tokens guardados.'); // Mensaje temporal
  
      } catch (error) {
        console.error('Error de red o del servidor:', error);
        setError('No se pudo conectar con el servidor.');
      }
    };
  

  return (
    <Layout>
      <div className="flex flex-row items-center mt-20 h-150 m-30 w-full backdrop-opacity-10">
        <div className="ml-12 flex-1">
          <div className="p-5 m-2">
            <h1 className="font-semibold font-montserrat text-3xl dark:text-white">
              CHAT <span className="bg-[#7E57E4] rounded-sm pl-1 pr-1 text-white dark:bg-amber-50 dark:text-[#7E57E4]">IA</span> 
            </h1>
          </div>
          <div className="p-5 m-2 font-montserrat font-semibold text-5xl dark:text-white">
            <h1>
              Mas que 
            </h1>
            <h1>
              un Chat.
            </h1>
          </div>
          <div className="pr-5 pb-5 pl-5 mr-2 mb-2 ml-2 font-montserrat font-semibold text-sm text-[#56555B]">
            <h4>
              version  1.0  Feeling Unites 2025
            </h4>
          </div>
        </div>
        {/* seccion form */}
        <div className=" flex-1">
          <div className="bg-amber-50 h-96 w-96 flex flex-col items-center rounded-lg dark:bg-[#212026]">
            <div className="font-semibold font-montserrat text-3xl pl-8 mt-9 mb-9 self-start dark:text-white">
              <h1>Login</h1>
            </div>
            <div className=" mb-2 pl-5 pr-3 items-center rounded-tl-lg h-9 w-80 flex flex-row bg-[#131216] text-[#525057]">
              <img src="" alt="" />
              {/* Añade clases al input para anular estilos por defecto */}
              <input
                type="text"
                placeholder="chatia@gmail.com"
                className="p-0 border-none outline-none h-full bg-transparent flex-grow" // Añadidas clases aquí
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
              </input>
            </div>
            <div className=" mt-2 pl-5 pr-3 items-center rounded-tl-lg h-9 w-80 flex flex-row bg-[#131216] text-[#525057]">
              <img src="" alt="" />
              {/* Añade clases al input para anular estilos por defecto */}
              <input
                type="password"
                placeholder="**********"
                className="p-0 border-none outline-none h-full bg-transparent flex-grow" // Añadidas clases aquí
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                >
              </input>
            </div>
            {/* DIV DE TERMINOS Y CONDICIONES - MODIFICADO */}
              <div className="text-[#7E57E4] font-montserrat mt-4 mb-4 pl-9 flex items-center self-start"> {/* Añadido flex y items-center */}
                <input
                  type="checkbox"
                  id="acceptTerms" // Añade un ID al input
                  className="mr-2 form-checkbox h-4 w-4 text-[#7E57E4] rounded border-gray-300 focus:ring-[#7E57E4]" // Clases de Tailwind para el checkbox (requiere el plugin @tailwindcss/forms)
                /> {/* El input checkbox */}
                <label htmlFor="acceptTerms" className="text-sm"> {/* La etiqueta asociada al input por su ID */}
                  Aceptar terminos y condiciones
                </label> {/* El texto ahora está dentro de la etiqueta label */}
              </div>
              {/* BOTON DE ENTRAR - MODIFICADO */}
              <div>
                {/* Añadimos la clase active:opacity-75 */}
                <button 
                className="bg-[#8057E3] h-9 w-80 rounded-md text-white font-semibold active:opacity-75"
                onClick={handleLogin}
                > {/* <--- Añadido active:opacity-75 */}
                  Entrar
                </button>
              </div>
            <div className="text-[#7E57E4] text-sm mt-3 items-center">
              <a href="#" className="no-underline hover:underline">
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Signin
