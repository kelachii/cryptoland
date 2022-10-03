import React from 'react'
import Button from './Component/Button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <form>
            <section className='login-input'>
                <input type='text' name='firstName' required placeholder='First Name'></input>
                <input type='text' name='firstName' required placeholder='Last Name'></input>
                <input type='text' name='email' required placeholder='Email Address'></input>
                <input type='password' name='Password' required placeholder='Password'></input>
            </section>
            <Button className='btn' label='Log In' />
            <p>Don't have an account? <Link>Sign Up</Link></p>
        </form>
    )
}

export default Login