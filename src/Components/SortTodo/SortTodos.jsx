import React from 'react'
import { sortTodosByDate, sortTodosByPriority } from '../../Helpers/Sort';

const SortTodos = ({todos, setTodos}) => {
    
    const handleSortByPriority = () => {
        setTodos(sortTodosByPriority(todos));
        //console.log(pendingTodos);
      };
    
    const handleSortByDate = () => {
      setTodos(sortTodosByDate(todos));
    }
      
  return (
    <div className='md:flex flex-wrap gap-5 justify-center bg-amber-950 py-3'>
      <button
          className='bg-black hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded'
          onClick={handleSortByPriority}>Sort by Priority
      </button>
      <button
          className='bg-black hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded'
          onClick={handleSortByDate}>Sort by Date
      </button>
    </div>
  )
}

export default SortTodos