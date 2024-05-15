import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/Slices/TodoSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('P0');
    const dispatch = useDispatch();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };

    const handleDueDateChange = (event) => {
      setDueDate(event.target.value);
    }

      
    const handlePriorityChange = (event) => {
      setPriority(event.target.value);
    };

  
    const handleAddTodo = () => {
      const id = uuidv4();
      let complete  = false;
      const createdDate = new Date().toISOString().split('T')[0];
      dispatch(addTodo({ id, name, description, complete, dueDate, createdDate, priority }));
      setName('');
      setDescription('');
      setDueDate('');
      setPriority('P0');
    };

  return (
    <div className='md:flex flex-wrap justify-around bg-amber-950 py-10'>  
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center sm:flex-col md:flex-row gap-5'>
          <input
            className="py-3 px-4 w-9/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='text'
            placeholder='Todo Name'
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="py-3 px-4 w-9/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='date'
            placeholder='Todo Date'
            value={dueDate}
            onChange={handleDueDateChange}
          />
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="py-3 w-9/12 md:w-52 px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <div className='mt-5 flex flex-wrap justify-center'>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder='Description'
            className="py-3 px-4 w-9/12 md:w-96 border-2 border-gray-200 rounded-lg text-md"
            rows={4}
          />
        </div>
       
      </div>
      <div className='flex justify-center items-center mt-5'>
        <button
          className="bg-black hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded h-12" 
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}

export default AddTodo