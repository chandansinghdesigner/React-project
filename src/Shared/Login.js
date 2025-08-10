import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, FormControl } from 'react-bootstrap';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  // const [nametype, setNametype] = useState ('');

  // const handleInputChange = (event) =>{
  //   setNametype(event.target.value);
  // }
  


  const handleLogin = (e) => {
    e.preventDefault();

    // Simple dummy validation
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem("isLoggedIn", "true");
      setErrorMessage('');
      navigate('/home', { replace: true });

    } else {
     setErrorMessage('Invalid username or password');
    }
  };

  if (username === 'admin' && password === 'admin') {
 
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl mb-4 text-center">Login </h2>
        <Form.Control 
        type="text" placeholder="Username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         className="block mb-4 border px-4 py-2 w-full" />
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block mb-4 border px-4 py-2 w-full"
        /> */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-4 border px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
        )}

              {/* <h1>{nametype}</h1>
      <FormControl  className=" border w-full" onChange={handleInputChange} /> */}
      </form>

    </div>
  );
}

export default Login;
