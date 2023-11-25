import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();

   const [name, setname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => navigate("/todo")}>Create</button>
      </form>
    </div>
  );
};

export default SignUp;
