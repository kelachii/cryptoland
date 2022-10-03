import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Component/Button'

const SignUp = () => {
    return (
        <form className='signup'>
            <h1>Sign Up</h1>
            <p>It only takes a minute to create your account</p>
            <section className='signup-input'>

                <input type='text' name='firstName' required placeholder='First Name'></input>
                <input type='text' name='firstName' required placeholder='Last Name'></input>
                <input type='text' name='email' required placeholder='Email Address'></input>
                <input type='password' name='Password' required placeholder='Password'></input>
                <input type='password' name='Password' required placeholder='Confirm Password'></input>

            </section>
            <div className='signup-inner'>
                <input type='checkbox' name='Agree' required></input>
                <p>I agree to the Cryptoland <Link to='/'>Terms of Service</Link> and <Link to='/'>Privacy Policy</Link></p>
            </div>
            <Button label='Create Account' />
            <p className='signup-p'>Already registered? <Link to='/Login'>Sign In</Link></p>
        </form>
    )
}

export default SignUp