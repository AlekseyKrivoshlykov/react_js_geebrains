import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { firebaseSingUp } from '../../services/firebase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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
      await firebaseSingUp(email, password)
      // navigate('/signin')
    } catch (error) {
      setError(error.message)
    } finally {
      //
    }
  }

  return (
   <>
    <h1>Sign Up into App</h1>
    <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail2"
            name='email'
            onChange={handleEmail}
            value={email ?? ''}
            aria-describedby="emailHelp" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
          <input 
            type="password" 
            name="password"
            className="form-control"
            onChange={handlePassword}
            value={password ?? ''}
            id="exampleInputPassword2" 
          />
        </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    {error && <p style={{color: 'red'}}>{error}</p>}
   </>
  )
}
