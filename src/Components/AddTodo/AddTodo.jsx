import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../redux/Slices/TodoSlice';
import { auth } from '../../Firebase/firebase_config';

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

  
    const handleAddTodo = async() => {
      if(auth.currentUser == null){
        alert("Please Sign in to Add Todos");
      }else{
        let complete  = false;
        const createdDate = new Date().toISOString().split('T')[0];
        dispatch(addTodoAsync({name, description, complete, dueDate, createdDate, priority }));
        setName('');
        setDescription('');
        setDueDate('');
        setPriority('P0');
      }
    };

  return (
    <div className='bg-slate-200 rounded bg-opacity-20 items-center flex flex-col w-10/12 md:mt-20 md:w-3/12 flex-wrap h-3/5 justify-center py-5 px-2 mx-5'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center sm:flex-col md:flex-col gap-2'>
          <input
            className="py-3 px-4 w-11/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='text'
            placeholder='Todo Name'
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="py-3 px-4 w-11/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='date'
            placeholder='Todo Date'
            value={dueDate}
            onChange={handleDueDateChange}
          />
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="py-3 w-11/12 md:w-52 px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <div className='flex flex-wrap justify-center'>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder='Description'
            className="py-3 px-3 w-full md:w-52 border-2 border-gray-200 rounded-lg text-md mt-2"
            rows={4}
          />
        </div>
       
      </div>
      <div className='flex justify-center items-center mt-5'>
        <button
          className="bg-neutral-600 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded h-12" 
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}

export default AddTodo