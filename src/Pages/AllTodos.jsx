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
        <div className='md:flex'
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp12426117.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'auto',
        }}
        >
          <AddTodo />
          <ListTodo todos={todos}/>
        </div>
    </>
  )
}

export default AllTodos