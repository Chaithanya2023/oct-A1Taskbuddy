import React, { useState } from "react";
export default function TaskForm() {
    const [task,settask] =useState('');
    const [priority,setpriority] =useState('medium');
    const[category,setcategory]=useState9('General');
    return (
        <form>
            <div id ="inp">
                <input type ="text"
                value ={task}
                onChange={(e)=>settask (e.target.value)}
                placeholder ="Enter your task"
                required/>
                <span><button type = "submit">Add Task </button></span>


            </div>
            <div id ='btn'>
            <select value={priority} onChange={(e) =>setpriority(e.target.value)}>
            <option value ="Hight">Hight</option>
            <option value="Medium">Medium</option>
            <option value="low">Low</option>
            </select>
        
            <select value={priority} onChange={(e)=>setpriority(e.target.value)}>
            <option value ="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            </select>
            </div>

        </form>
      
    )
}
