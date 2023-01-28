import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/note/noteContext'

export default function Addnote() {
    const context = useContext(noteContext)
    const {addNote} = context

    const [note,setNote] =useState({title:"",description:"",tag:"general"})

   const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:"general"})
   }

   const onchange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value})
   }

  return (
    <div>
      <h3>Add Note</h3>
        <form>
  <div className="form-group my-3">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name="title" onChange={onchange} value={note.title} aria-describedby="emailHelp" placeholder="Enter Title" minLength={5} required/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange} placeholder="Enter Description" minLength={5} required/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} placeholder="Enter Tag" />
  </div>
  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button disabled={note.description.length<5 } type="submit" onClick={handleClick} className="btn btn-primary">ADD</button>
</form>
      </div>
  )
}
