import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routing from './Routing.jsx'
import Home from './Pages/home/Home.jsx'
import About  from './Pages/about/About.jsx'
import Service from './Pages/service/Service.jsx'
import Product from './Pages/product/Product.jsx'
import Contact from './Pages/product/contact/Contact.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routing/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
