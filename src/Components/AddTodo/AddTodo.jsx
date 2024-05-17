import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, addTodoAsync } from '../../redux/Slices/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Firestore, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/firebase_config';
import firebase from 'firebase/compat/app';

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
      const id = uuidv4();
      let complete  = false;
      const createdDate = new Date().toISOString().split('T')[0];
      dispatch(addTodoAsync({name, description, complete, dueDate, createdDate, priority }));
      setName('');
      setDescription('');
      setDueDate('');
      setPriority('P0');
    };

  return (
    <div className='bg-slate-200 rounded bg-opacity-40 items-center flex flex-col md:mt-10 flex-wrap h-4/5 justify-center py-5 px-2 mx-5'>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center sm:flex-col md:flex-col gap-2'>
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
        <div className='flex flex-wrap justify-center ml-5'>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder='Description'
            className="py-3 px-3 w-full md:w-72 border-2 border-gray-200 rounded-lg text-md mt-5"
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