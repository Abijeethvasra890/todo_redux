import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';

const ListTodo = ({ todos }) => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="p-5 text-white h-screen w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Todos</h2>
        <button
            onClick={toggleView}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${isGridView ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${isGridView ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
      </div>
      <div className={isGridView ? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-4"}>
        {todos?.length > 0 ? (
          todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} isGridView={isGridView} />
          ))
        ) : (
          <div className="text-xl font-semibold">No Todos</div>
        )}
      </div>
    </div>
  );
};

export default ListTodo;
