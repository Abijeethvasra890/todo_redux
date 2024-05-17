import React from 'react';
import EditTodo from '../EditTodo/EditTodo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';
import CompleteTodo from '../CompleteTodo/CompleteTodo';


const TodoCard = ({ todo }) => {
  //console.log(todo.complete);
  let bgcard;
  if(todo.priority == "P0") bgcard = 'bg-amber-500';
  else if(todo.priority == "P1")  bgcard = 'bg-amber-300';
  else bgcard = 'bg-amber-200';
  const cardClassName = `p-4 rounded-lg shadow-md ${todo.complete ? 'bg-green-200' : bgcard}`;

  return (
    <div key={todo.id} className={cardClassName}>
      <div className='flex justify-between'>
        <div>
          <h3 className="text-xl text-black font-semibold">{todo.name}</h3>
          <h5 className="text-l text-black font-semibold mb-2">{todo.priority}</h5>
          <p className="text-gray-600">{todo.description}</p>
          <p className="text-gray-600">{todo.dueDate}</p>
        </div>
        <div><CompleteTodo todo={todo}/></div>
      </div>
      <div className='flex flex-col sm:flex-row justify-around md:gap-2'>
        <EditTodo todo={todo}/>
        <DeleteTodo todoId={todo.id}/>
      </div>
    </div>
  );
};

export default TodoCard;
