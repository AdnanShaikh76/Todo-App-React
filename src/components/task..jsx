import React from 'react'


function Task({ taskvalue}) {

  const removetask = function removetask(id){
    setComponents(components.filter((component) => component.id !== id));
}  
    
  return (
    <div className='w-10/12 bg-slate-400 px-4  text-slate-900 uppercase my-3 flex gap-2 items-center justify-between'>
        <div className='w-6/12 h-full py-4'>
            <p className='text-slate-700 text-lg'>{taskvalue}</p>
        </div>
        
        <button className='bg-white px-3 py-2'
        onClick={removetask}
        >Delete</button>
        
        
    </div>
  )
}
export default Task