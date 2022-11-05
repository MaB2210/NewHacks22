import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>
      <div className="login__container">
        <div className="login__card">
          <h2 className="login__card--heading">Already have an account?</h2>
          <div className="login__card--form">
            <label className="label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <label className="label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <button className="login">Login</button>
            <button className="signin">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login