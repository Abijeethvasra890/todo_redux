import React from 'react';
import EditTodo from '../EditTodo/EditTodo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';
import CompleteTodo from '../CompleteTodo/CompleteTodo';


const TodoCard = ({ todo }) => {
  const cardClassName = `bg-white p-4 rounded-lg shadow-md ${todo.complete ? 'bg-green-200' : ''}`;

  return (
    <div key={todo.id} className={cardClassName}>
      <div className='flex justify-between'>
        <div>
          <h3 className="text-xl text-black font-semibold mb-2">{todo.name}</h3>
          <p className="text-gray-600">{todo.description}</p>
        </div>
        <div><CompleteTodo todo={todo}/></div>
      </div>
      <div className='flex justify-around'>
        <EditTodo todo={todo}/>
        <DeleteTodo todoId={todo.id}/>
      </div>
    </div>
  );
};

export default TodoCard;
