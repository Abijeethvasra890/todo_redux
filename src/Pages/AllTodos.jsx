import React from 'react'
import AddTodo from '../Components/AddTodo/AddTodo'
import ListTodo from '../Components/ListTodo/ListTodo'
import Navbar from '../Components/Navbar/Navbar'

const AllTodos = () => {
  return (
    <>
        <Navbar />
        <AddTodo />
        <ListTodo />
    </>
  )
}

export default AllTodos