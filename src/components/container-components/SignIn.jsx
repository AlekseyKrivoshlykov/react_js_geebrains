import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { firebaseSingIn } from '../../services/firebase'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleForm = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await firebaseSingIn(email, password)
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    } finally {
      //
    }
  }

  return (
   <>
    <h1>Sign In</h1>
    <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1"
            name='email'
            onChange={handleEmail}
            value={email ?? ''}
            aria-describedby="emailHelp" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            name="password"
            className="form-control"
            onChange={handlePassword}
            value={password ?? ''}
            id="exampleInputPassword1" 
          />
        </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
    {error && <p style={{color: 'red'}}>{error}</p>}
   </>
  )
}
