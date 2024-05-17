import React from 'react';
import TodoCard from '../TodoCard/TodoCard';

const ListTodo = ({todos}) => {
  //console.log(todos);
  return (
    <div className="p-5 text-white h-screen w-full"
      >
      <h2 className="text-xl font-bold mb-4">List of Todos</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
