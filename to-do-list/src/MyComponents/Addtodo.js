import React, { useState } from 'react';

export const Addtodo = (addTodo) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit=(e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank ")
        }
        addTodo(title,desc);
    }

  return (
    <div className='container'>
        <h3 className=' my-3'>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label for="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value) }className="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">To Description </label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add to Do</button>
</form>


    </div>
  )
}
