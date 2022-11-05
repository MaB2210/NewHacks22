import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  return (
    <>
      <div className="signup__container">
        <div className="signup__card">
          <h2 className="signup__card--heading">Already have an account?</h2>
          <div className="signup__card--form">
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
            <label className="label">Confirm Password:</label>
            <input
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
              placeholder="Confirm Password"
            />
            <button className="signup">Sign Up</button>
            <button className="login">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
