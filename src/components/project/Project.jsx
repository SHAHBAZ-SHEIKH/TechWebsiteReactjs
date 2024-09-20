import React from 'react'
import './Project.css'
import Button from '../button/Button'

function Project() {


    return (
        <div className="container">
            <div className="projectMain">
                <div className="projectContent">
                    <div className="projectCard">
                        <div className="projectHead1">
                            <div className="projectLine"></div>
                            <h5>Our Project</h5>
                            <div className="projectLine"></div>
                        </div>
                        <div className="projectHead2">
                            <h3>The Best Softit Project</h3>
                        </div>
                    </div>
                    <div className="projectPara">
                        <p>We are privileged to work with hundred of future-thinkIt is a long stablished fact that are will be distracted by the page when looking software, and brands.</p>
                    </div>
                </div>
                <div className="projectBtn">
                    <Button bgChange="#FF3C00" txtcolor="#fff" title="Home" />
                    <Button bgChange="#fff" txtcolor="#FF3C00" title="Bussiness" />
                    <Button bgChange="#fff" txtcolor="#FF3C00" title="Design" />
                    <Button bgChange="#fff" txtcolor="#FF3C00" title="Development" />
                    <Button bgChange="#fff" txtcolor="#FF3C00" title="Management" />
                </div>
            </div>
        </div>
    )
}

export default Project
