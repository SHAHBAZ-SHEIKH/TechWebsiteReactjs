import React from 'react'
import './Button.css'

function Button({bgChange,txtcolor,title}) {
    console.log(bgChange,txtcolor,title)
    

    return (
        <div>
            <button style={{backgroundColor:bgChange,color:txtcolor}}  className='btnmain'>{title}</button>
        </div>
    )
}

export default Button;
