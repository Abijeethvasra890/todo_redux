import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../../redux/Slices/TodoSlice';

const CompleteTodo = ({todo}) => {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleTodoComplete(todo.id));
    };
    return (
        <input 
            type='checkbox'
            checked={todo.complete}
            onChange={handleCheckboxChange}
            ></input>
    )
}

export default CompleteTodo