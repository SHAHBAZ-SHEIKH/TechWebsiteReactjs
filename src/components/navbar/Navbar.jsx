import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import  Button  from '../button/Button'
import Banner from '../banner/Banner'

function Navbar() {


    return (
        <nav>
            <div className='navbarContainer'>
                <div className='imgDiv'>
                    <img src="../../../public/logo.png" alt="" />
                </div>

                <div className='links'>
                    <ul>
                        <li>
                            <NavLink to='/' activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' activeClassName="active">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to='/product' activeClassName="active">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link>
                        <Button bgChange="red" txtcolor="#fff" title="Get Started" />
                    </Link>
                </div>
            </div>

            

            
        </nav>
    )
}

export default Navbar
