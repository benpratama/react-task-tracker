// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import React, { useEffect, useState } from "react";


function App() {
  const [showForm,setShowForm] = React.useState(false)
  const [tasks, setTasks]=React.useState(
    [
        {
            id:1,
            text:'going to gym',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id:2,
            text:'shop meal',
            day: 'Feb 6th at 2:30pm',
            reminder: false
        }
    ]
  )

  //function buat delete
  const f_onDelete = (id)=>{
    setTasks(
      tasks.filter((task)=>task.id !== id)
    )
  }

  //Add Task
  const f_onAddTask = (task)=>{
   var id = tasks.length+1
   const newTask = {id,...task}
   setTasks([...tasks,newTask])
  }

  //function buat reminder
  const f_onReminder  = (id)=>{
    setTasks(
      tasks.map((task)=>task.id === id ?{ ...task, reminder:!task.reminder }:task)
    )
  }

  // console.log(tasks)
  return (
    <div className="container">
  
      {/* kirim parameter ke Header.js */}
      <Header f_showForm={()=>setShowForm(!showForm)} showForm={showForm} />
      {showForm ? <AddTask f_onAddTask={f_onAddTask}/>:''}
      
      {tasks.length>0 ? <Tasks tasks={tasks} f_onDelete={f_onDelete} f_onReminder={f_onReminder}/>: "No Tasks to Show"}
      {/* <Tasks tasks={tasks} f_onDelete={f_onDelete}/> */}
    </div>
  );
}

export default App;
