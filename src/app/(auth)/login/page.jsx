import { LoginForm } from '../../../components/login-form'
import React from 'react'
import "../../globals.css"

const Login = () => {
  return (
    <div className='w-screen h-screen grid place-items-center'>
        <LoginForm />
    </div>
  )
}

export default Login