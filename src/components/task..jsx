import React from 'react'


function Task({id, removeComponent, inputValue}) {

    
  return (
    <div className='w-10/12 bg-slate-400 px-4 py-3 text-slate-900 uppercase my-3 flex gap-2 items-center justify-between'>
        <div className='w-6/12 h-full py-4'>
            <p className='text-slate-700 text-lg'>{inputValue} #{id}</p>
        </div>
        
        <button className='bg-white px-3 py-2'
        onClick={() => removeComponent(id)}>Delete</button>
    </div>
  )
}
export default Task