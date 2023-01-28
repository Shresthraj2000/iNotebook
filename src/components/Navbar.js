import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand mx-2" to="/">iNotebook</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
    </ul>
    {!localStorage.getItem('token')?<form class="form-inline my-2 my-lg-0">
    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
    <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
    </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
  </div>
</nav>
  )
}
