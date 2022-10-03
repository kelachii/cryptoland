import React from 'react'
import icon from '.././Icon.svg'
import icon2 from '.././Icon2.svg'
import icon3 from '.././Icon3.svg'

const Verify = () => {
    return (
        <div>
            <h1>Verify Account</h1>
            <p>Choose your document type</p>
            <img src={icon} alt='' />
            <p>Identity Card</p>

            <img src={icon2} alt='' />
            <p>Drivers License</p>

            <img src={icon3} alt='' />
            <p>Passport</p>
        </div>
    )
}

export default Verify