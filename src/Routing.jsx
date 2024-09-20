import { Outlet } from "react-router-dom";
import React from 'react'
import  Navbar  from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 function Routing() {
    

    return (
        <>
           <Navbar/>
           <Outlet/> 
           <Footer/>
        </>
    )
}

export default Routing
