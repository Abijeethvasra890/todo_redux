import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ListTodo from '../Components/ListTodo/ListTodo'
import { useSelector } from 'react-redux';

const PendingTodos = () => {
    const alltodos = useSelector((state) => state.todos.todos);
    const pendingTodos = alltodos.filter(todo => !todo.complete);
  return (
    <>
        <Navbar />
        <ListTodo todos={pendingTodos}/>
    </>
  )
}

export default PendingTodos