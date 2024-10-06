import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    
  }

  const handleDelete = () => {
    
  }


  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted : false}])
    setTodo("");
    console.log(todo)
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  return (
    <div >
        <Navbar />
      <div className='w-full bg-slate-100 min-h-screen flex justify-center'>
        <div className='w-3/4 bg-slate-600 my-5 rounded-lg '>
          <h1 className='text-white text-lg mx-5 my-3'>Write Todo</h1>
          <input type="text" onChange={handleChange} value={todo} className='py-2 mx-5 w-80 rounded-lg'/>
          <button className='px-3 py-1 bg-slate-200 rounded-lg mx-5 hover:bg-slate-400' onClick={handleAdd}>Add</button>
          <div className='todos w-full h-full'>
          <h1 className='text-white text-lg mx-5 my-3'>Your Todos</h1>

          {todos.map(item =>{
              return <div key={item.id} className='w-[90%] py-2 px-2 my-2 bg-slate-100 mx-auto flex items-center justify-between'>
              <h2 className='text-black'>{item.todo}</h2>
              <div className='btns'>
                <button onClick={handleEdit} className='px-3 py-1 bg-slate-300 rounded-lg mx-3 hover:bg-slate-400'>Edit</button>
                <button onClick={handleDelete} className='px-3 py-1 bg-slate-300 rounded-lg mx-3 hover:bg-slate-400'>Delete</button>
              </div>
            </div> 
          })}
           
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default App