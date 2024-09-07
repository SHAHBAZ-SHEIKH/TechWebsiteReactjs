
import React from 'react'
import './ScaleBar.css'
function ScaleBar({title,percentage,widthgraph}) {
    return (
        <div className="each-skill">
            <div className="canditatos">
                <div className="parcial">
                    <div className="info">
                        <div className="name">{title}</div>
                        <div className="percetageNum">{percentage}</div>
                    </div>
                    <div className="progressBar">
                        <div className="percentage" style={{ width: `${widthgraph}` }}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScaleBar