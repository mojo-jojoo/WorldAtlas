import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { Home } from './pages/Home';
import { AppLayout } from './components/Layouts/AppLayout';
import {Errorpage} from './pages/ErrorPage';
import { CountryDetails } from './components/Layouts/CountryDetails';

const router = createBrowserRouter([

  {
path:"/",
element:<AppLayout/>,
errorElement:<Errorpage/>,

children:[

  
  {
    path: "/",
    element: <Home/>,
    
    
  },
  {
    path: "About",
    element: <About/>
  },
  {
    path: "Country",
    element: <Country/>
  },
   {
    path: "country/:id",
    element: <CountryDetails/>
  },
  {
    path: "Contact",
    element: <Contact/>
  },
  
 ],
},

]);




const App = ()=> { 
  return (
    <RouterProvider router={router}> </RouterProvider>

  )
  
        
   
  
}

export default App
