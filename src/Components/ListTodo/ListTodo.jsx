import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import { FaList, FaTh } from 'react-icons/fa';

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
          className="bg-neutral-500 hover:bg-black text-white font-bold py-2 px-4 rounded flex items-center"
        >
          {isGridView ? <FaList className="w-6 h-6" /> : <FaTh className="w-6 h-6" />}
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
