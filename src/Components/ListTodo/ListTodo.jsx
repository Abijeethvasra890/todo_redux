import React from 'react';
import { useSelector } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="bg-neutral-700 p-5 text-white h-screen w-full">
      <h2 className="text-xl font-bold mb-4">List of Todos</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {todos?.length > 0 ? (
          todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="text-xl font-semibold mb-2">No Todos</div>
        )}
      </div>
    </div>
  );
};

export default ListTodo;
