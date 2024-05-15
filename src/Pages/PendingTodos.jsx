import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ListTodo from '../Components/ListTodo/ListTodo'
import { useSelector } from 'react-redux';
import SortTodos from '../Components/SortTodo/SortTodos';
import FilterTodo from '../Components/FilterTodo/FilterTodo';


const PendingTodos = () => {
    const alltodos = useSelector((state) => state.todos.todos);
    const [pendingTodos, setPendingTodos] = useState([]);

    useEffect(() => {
        setPendingTodos(alltodos.filter(todo => !todo.complete));
    }, [alltodos]);
    
  return (
    <>
        <Navbar />
        <SortTodos todos={pendingTodos} setTodos={setPendingTodos}/>
        <FilterTodo todos={pendingTodos} setTodos={setPendingTodos}/>
        <ListTodo todos={pendingTodos}/>
    </>
  )
}

export default PendingTodos