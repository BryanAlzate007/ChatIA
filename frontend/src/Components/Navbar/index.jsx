import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import icon3 from '../../assets/img/icon3.png'



const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-sheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    useEffect(()=> {
        if (theme == "dark"){
            document.querySelector('html').classList.add('dark')
    }   else {
            document.querySelector('html').classList.remove('dark')
    }
    }, [theme])

    const activeStyle = 'underline underline-offset-4'
    const handleChangeTheme = () => {
       setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }
    return (

        <nav className='flex justify-between items-center text-[#1A0B2E] fixed z-10 w-full py-5 px-8 text-lg font-semibold top-0 dark:bg-[#1A0B2E] dark:text-white'>
            <ul className='flex items-center gap-3'>
                <li className=''>
                    <NavLink
                    to='/'>
                    <img
                    src={icon3} // Usamos la variable importada aquí
                    alt="Logo de ChatIA" // Texto alternativo para accesibilidad
                    className="h-25 w-auto" // Opcional: Clases de Tailwind para controlar el tamaño de la imagen
                    />
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/Services'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/AboutMe'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/ContactMe'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Contact me
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink>
                        <button className='bg-slate-200 px-4 py-2 rounded hover:bg-slate-300'
                        onClick={handleChangeTheme}>Change</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/Signin'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sing In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar