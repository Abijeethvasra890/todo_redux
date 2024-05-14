import React from 'react'
import AddTodo from '../Components/AddTodo/AddTodo'
import ListTodo from '../Components/ListTodo/ListTodo'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const AllTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
        <Navbar />
        <AddTodo />
        <ListTodo todos={todos}/>
    </>
  )
}

export default AllTodos