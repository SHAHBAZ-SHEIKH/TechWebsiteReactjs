import React from 'react'
import './ProjectCard.css'

export function ProjectCard({title,imagProject}) {


    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="cardMain">
                <div className="cardImageMain">
                    <img src={imagProject} alt="" />
                </div>
                <div className="cardDiv">
                    <div className="cardContentMain">
                        <div className="cardIcon">
                            <i className="fa-solid fa-github"></i>
                        </div>
                        <div className="cardHead">
                            <h5>{title}</h5>
                        </div>
                    </div>
                </div>

                <div className="cardLayer">
                    <div className="githubIcon">
                        <i class="fa-solid fa-paperclip"></i>
                    </div>

                    <div className="githubIcon">
                        <i class="fas fa-arrows-alt"></i>
                    </div>

                </div>

            </div>





        </div>
    )
}
