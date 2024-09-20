import React from 'react'
import './Banner.css'
import Button from '../button/Button'


function Banner() {


    return (

        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="courserContent">
                    <div className="carousel-item active">
                        <img src="../../public/assets/slider1.jpg" className="d-block w-100" alt="..." />
                    </div>


                    <div className="carousel-item">
                        <img src="../../public/assets/slider2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../../public/assets/slider3.jpg" className="d-block w-100" alt="..." />
                    </div>


                </div>
                <div className="crouserItem">
                    <div className='heading'>
                        <h1>The Best Bussines & IT Solution</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste temporibus quasi quibusdam ducimus recusandae architecto. Consectetur corrupti officiis fugit.</h5>
                    </div>

                    <div className="headingBtn">
                        <Button bgChange="red" txtcolor="#fff" title="Discover Now" />
                        <Button bgChange="#fff" txtcolor="black" title="Learn more" />
                    </div>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Banner
