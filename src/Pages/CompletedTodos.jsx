import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ListTodo from '../Components/ListTodo/ListTodo'
import { useSelector } from 'react-redux';
import SortTodos from '../Components/SortTodo/SortTodos';

const CompletedTodos = () => {
  const alltodos = useSelector((state) => state.todos.todos);
  const [completedTodos, setCompletedTodos] = useState([]);
    
    useEffect(() => {
        setCompletedTodos(alltodos.filter(todo => todo.complete));
    }, [alltodos]);

 return (
    <>
        <Navbar />
        <div 
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp12426117.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'auto',
        }}
        >
        <SortTodos todos={completedTodos} setTodos={setCompletedTodos}/>
        <ListTodo todos={completedTodos}/>
        </div>
    </>
  )
}

export default CompletedTodos