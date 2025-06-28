"use client";
import { useState } from "react";

export default function About() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const copy = [...mainTask];
    copy.splice(index, 1);
    setMainTask(copy);
  };

  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={submitHandler}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {mainTask.length === 0 ? (
        <h2>No tasks</h2>
      ) : (
        mainTask.map((task, i) => (
          <div key={i}>
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
            <button onClick={() => deleteHandler(i)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
