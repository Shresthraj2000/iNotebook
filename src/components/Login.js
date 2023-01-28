import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const host = "http://localhost:5000"
    const [credentials,setCredentials] =useState({email: "",password: ""})
    let navigate = useNavigate();

    const onchange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
     const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const response = await fetch(`${host}/api/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 },
            body: JSON.stringify({email: credentials.email, password:credentials.password})
        });

        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            navigate("/")
        }
        else{
            alert("Invalid credentials")
        }
     }

  return (
    <div className='container my-5'>
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} value={credentials.email} placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onchange} value={credentials.password} placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
