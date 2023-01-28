import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Signup = () => {

    const host = "http://localhost:5000"
    const [credentials,setCredentials] =useState({name:"", email: "",password: "",cpassword: ""})
    let navigate = useNavigate();

    const onchange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
     const handleSubmit = async (e)=>{
        e.preventDefault();
        if(credentials.password===credentials.cpassword){
        const response = await fetch(`${host}/api/auth/createuser`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password:credentials.password})
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
    else{
        alert("Password must be same")
    }
     }

  return (
    <div className='container my-5'>
        <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="name" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter name" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onchange} placeholder="Password" minLength={5} required />
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onchange} placeholder="Confirm Password" minLength={5} required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
