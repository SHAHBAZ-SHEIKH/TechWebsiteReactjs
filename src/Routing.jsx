import { Outlet } from "react-router-dom";
import React from 'react'
import  Navbar  from "./components/navbar/Navbar";

 function Routing() {
    

    return (
        <>
           <Navbar/>
           <Outlet/> 
        </>
    )
}

export default Routing
