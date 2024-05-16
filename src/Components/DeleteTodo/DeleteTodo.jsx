import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, deleteTodoAsync } from '../../redux/Slices/TodoSlice';

const DeleteTodo = ({ todoId }) => {
    const dispatch = useDispatch();
    const handleDeleteTodo = () => {
        dispatch(deleteTodoAsync(todoId));
    };
      

  return (
    <button
        className="bg-red-900 hover:bg-black text-white font-bold py-2 px-4 rounded mt-4" 
        onClick={handleDeleteTodo}
        >
        Delete Todo
    </button>
  )
}

export default DeleteTodo