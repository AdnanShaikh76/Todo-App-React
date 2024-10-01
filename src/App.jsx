import React, { useState } from "react";
import Task from "./components/task.";

function App() {

  const [component, setcomponent] = useState([]);
  
  const taskvalue = document.getElementById("taskvalue");

  function removetask(){
    component.pop()
}
  
  function addcomponent(){
    setcomponent([...component, <Task key={component.length} />])
    console.log(taskvalue)
  }


  return (
    <>
      <div className="w-full h-screen bg-gray-200 ">
        <header className="w-full h-20 bg-slate-500 text-yellow-200 text-3xl flex items-center justify-center">
          To-Do Application
        </header>
        <input type="text" name="task" id="taskvalue" className="py-3 px-3 w-7/12 mx-32" placeholder="Enter Your Task " />
        <button
          className="px-5 py-3 bg-slate-600 rounded-md text-yellow-200 mx-6 my-5"
          onClick={addcomponent}
        >Add Task
        </button>
        <div className="w-full min-h-screen bg-slate-300 flex flex-col items-center py-8">
          

          {component}
        </div>
      </div>
    </>
  );
}

export default App;
