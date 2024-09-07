import React from 'react'
import './Card.css'

function Card({icon, title, text}) {


    return (

        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="cardContent">
                <div className="cardimg">

                    <i className={icon}></i>

                </div>
                <div className="cardhead">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>

        </div>



    )
}

export default Card;
