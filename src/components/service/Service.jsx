import React from 'react'
import './Service.css'
import Button from '../button/Button'

function Service({icon, title,imgservice}) {
    console.log(imgservice)


    return (

        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="cardMain">
                <div className="cardImageMain">
                    <img src={imgservice} alt="" />
                </div>
                <div className="cardDiv">
                    <div className="cardContentMain">
                        <div className="cardIcon">
                            <i className={icon}></i>
                        </div>
                        <div className="cardHead">
                            <h5>{title}</h5>
                        </div>
                    </div>
                </div>

                <div className="cardLayer2">
                    <i class={icon}></i>
                    <h5>{title}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat facilis minima perspiciatis </p>
                    <Button bgChange="#fff" txtcolor="red" title="Read More" />
                </div>

            </div>





        </div>


    )
}

export default Service

