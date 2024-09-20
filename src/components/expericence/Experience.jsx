import React from 'react'
import './Experience.css'
import ScaleBar from '../scaleBar/ScaleBar'
import  Button  from '../button/Button'

function Experience() {


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="imgDivService">
                        <img src="assets/experience.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="aboutContainer">
                        <div className="mainlineDiv">
                            <div className="line1"></div>
                            <span className='head'>Our About Us</span>
                            <div className="line1"></div>

                        </div>

                        <div className="aboutContent">
                            <div className="abouthead">
                                <h3>More than To Provide <span>IT Solutions 24+ Years </span> Of Experience</h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.
                                </p>
                            </div>
                        </div>

                        <ScaleBar title="Development" percentage="90%" widthgraph="90%" />
                        <ScaleBar title="Design" percentage="85%" widthgraph="85%" />
                        <ScaleBar title="Solution" percentage="80%" widthgraph="80%" />
                        <ScaleBar title="Consultancy" percentage="70%" widthgraph="70%" />

                        <Button bgChange="red" txtcolor="#fff" title="About More" />

                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
