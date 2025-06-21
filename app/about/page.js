"use client"
import React, { useState } from 'react'

function About() {
const [title, setTitle] = useState();
const [desc, setDesc] = useState("");
const [mainTask, setmainTask] = useState([]);

const submitHandler = (e)=> {
  e.preventDefault();
  // console.log(title);
  // console.log(desc);

  setmainTask([...mainTask,{title, desc}]);

  setTitle("");
  setDesc("");

  console.log(mainTask)
  
}


const deleteHandker = (index)=> {
  let copyTask = [...mainTask];
  copyTask.splice(index,1);
  setmainTask(copyTask)

}

let renderTask = <h2>No Task Available</h2>

if(mainTask.length > 0){
    renderTask = mainTask.map((task,index)=>(
    <div key={index} className='flex justify-between border-b py-2 font-bold w-2/3 mx-auto my-5'>
       <h5>{task.title}</h5>
      <h6>{task.desc}</h6>
      <button className='bg-yellow-300 rounded-2xl p-2 px-4' onClick={()=>{deleteHandker(index)}}>Delete</button>
    </div>
 ))
}


  return (
    <div>
      <h1 className='font-bold text-4xl bg-blue-500 text-center p-3'>My To do list with Two way Binding</h1>
      <form className='flex justify-center gap-3 m-3' onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-black bg-amber-300 p-2 pl-2.5 rounded-2xl border' 
        placeholder='Add Task here'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        
        />
         <input type='text' className='text-2xl border-black bg-amber-300 p-2 pl-2.5 rounded-2xl border' 
         placeholder='Add Description here'
         value={desc}
         onChange={(e)=>{setDesc(e.target.value)}}
         />
         <button className='bg-black text-white p-2 rounded-3xl font-bold px-5'>Add Task</button>
      </form>

      <hr></hr>

      <div className='border bg-slate-400 p-4 border-slate-500'>        
        
        {renderTask}
        
        
      </div>
    </div>
  )
} 

export default About