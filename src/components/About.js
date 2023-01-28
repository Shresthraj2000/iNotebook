import React from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/note/noteContext'

export default function About() {
    // const a= useContext(noteContext);
  return (
    <div>
      {/* <h3>About {a.name}</h3> */}
      <div className="card text-center mx-5 my-5">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">About iNotebook</h5>
    <p className="card-text">It has all built in CRUD operations.</p>
    {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
  </div>
  <div className="card-footer text-muted">
    ~by Shresth Raj
  </div>
</div>
    </div>
  )
}
