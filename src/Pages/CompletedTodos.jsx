import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ListTodo from '../Components/ListTodo/ListTodo'
import { useSelector } from 'react-redux';

const CompletedTodos = () => {
  const alltodos = useSelector((state) => state.todos.todos);
  const completedTodos = alltodos.filter(todo => todo.complete);

 return (
    <>
        <Navbar />
        <ListTodo todos={completedTodos}/>
    </>
  )
}

export default CompletedTodos