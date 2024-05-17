import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodoComplete, toggleTodoCompleteAsync } from '../../redux/Slices/TodoSlice';

const CompleteTodo = ({todo}) => {
    const dispatch = useDispatch();
    const handleCheckboxChange = () =>{
        //console.log("Complete Todo");
        dispatch(toggleTodoCompleteAsync(todo.id,todo));
       
    };
    return (
        <input 
            type='checkbox'
            checked={todo.complete}
            onChange={handleCheckboxChange}
            ></input>
    )
}

export default CompleteTodo;