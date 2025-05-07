import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import NotFound from '../NotFound'
import Signin from '../Signin'
import DashBoard from '../DashBoard'
import Navbar from '../../Components/Navbar'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home />},
    {path:'/*', element: <NotFound />},
    {path:'/Signin', element: <Signin /> },
    {path:'/DashBoard', element: <DashBoard />}
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes />
    <Navbar />
    </BrowserRouter>
  )
}

export default App
