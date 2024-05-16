import React, { useEffect, useState } from 'react'
import AddTodo from '../Components/AddTodo/AddTodo'
import ListTodo from '../Components/ListTodo/ListTodo'
import Navbar from '../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodosAsync } from '../redux/Slices/TodoSlice'

const AllTodos = () => {
  const dispatch = useDispatch();

  // Fetch todos when the app component mounts
  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);
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