import React from "react";
import { useContext } from "react";
import noteContext from "../context/note/noteContext";

export default function Noteitem(props) {
    const context = useContext(noteContext)
    const {deleteNote} = context

    const {note, updateNote} = props;
  return (
    <>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text" style={{color: "blue"}}>{note.tag}</p>
          <button type="button" className="btn btn-sm btn-outline-success mx-1" onClick={()=>{updateNote(note)}}>Edit</button>
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{deleteNote(note._id)}}>Delete</button>

        </div>
      </div>
    </>
  );
}
