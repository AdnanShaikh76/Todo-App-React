import React, {useState} from 'react'
import Navbar from './components/Navbar'

function App() {

  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    setTodos([...todos, {todos}])
  }


  return (
    <div >
        <Navbar />
      <div className='w-full bg-slate-100 min-h-[90vh] flex justify-center'>
        <div className='w-3/4 h-96 bg-slate-600 my-5 rounded-lg '>
          <h1 className='text-white text-lg mx-5 my-3'>Write Todo</h1>
          <input type="text"   className='py-2 mx-5 w-80 rounded-lg'/>
          <button className='px-3 py-1 bg-slate-200 rounded-lg mx-5 hover:bg-slate-400' onClick={handleAdd}>Add</button>
          <div className='todos w-full h-full'>
          <h1 className='text-white text-lg mx-5 my-3'>Your Todos</h1>
           <div className='w-[90%] py-4 px-2 bg-slate-100 mx-auto flex items-center justify-between'>
            <h2>Task</h2>
            <div className='btns'>
              <button className='px-3 py-1 bg-slate-300 rounded-lg mx-3 hover:bg-slate-400'>Edit</button>
              <button className='px-3 py-1 bg-slate-300 rounded-lg mx-3 hover:bg-slate-400'>Delete</button>
            </div>
          </div> 
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default App