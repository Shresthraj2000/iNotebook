import React, {useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/note/noteContext'
import Addnote from './Addnote'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom'

export default function Note() {
  const context=useContext(noteContext)
  const {notes, getNote, editNote} = context;
  const navigate = useNavigate()
   
  useEffect(()=>{
    if(localStorage.getItem('token')){
    getNote()
    // eslint-disable-next-line
    }
    else{
      navigate("/login")
    }
  },[])
  

  const [note,setNote] =useState({id:"", etitle: "", edescription: "" ,etag: ""})
  
  //useRef
  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote=(currentnote)=>{
    ref.current.click();
    setNote({id:currentnote._id, etitle: currentnote.title , edescription: currentnote.description, etag: currentnote.tag })
  
  }

  const handleClick=(e)=>{
   editNote(note.id,note.etitle,note.edescription,note.etag)
   refClose.current.click();
   
   }

  const onchange=(e)=>{
   setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
    
    <Addnote />
    
    <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
    </button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group my-3">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onchange} aria-describedby="emailHelp" placeholder="Enter Title" minLength={5} required/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onchange} placeholder="Enter Description" minLength={5} required/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} placeholder="Enter Tag" />
  </div>

</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update changes</button>
      </div>
    </div>
  </div>
</div>

    <div className='my-3'>
        <h3>Your Notes</h3>
        {notes.map((note)=>{
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
    </div>
    </>
  )
}
