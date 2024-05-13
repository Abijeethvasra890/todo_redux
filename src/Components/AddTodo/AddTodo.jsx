import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/Slices/TodoSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleAddTodo = () => {
      // Dispatch addTodo action with the input values
      const id = uuidv4();
      let complete  = false;
      dispatch(addTodo({ id, name, description, complete }));
      // Clear input fields after adding todo
      setName('');
      setDescription('');
    };

  return (
    <div className='flex flex-wrap justify-around bg-amber-950 py-10'>  
        <div className='flex flex-wrap justify-between gap-5'>
            <input
            className="py-3 px-4 w-64 border-2 border-gray-200 rounded-lg text-md"
            type='text'
            placeholder='Todo Name'
            value={name}
            onChange={handleNameChange}
            />
            <input
            type='text'
            className="py-3 w-72 px-4 border-2 border-gray-200 rounded-lg text-md"
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
            />
        </div>
        <button
        className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded" 
        onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo