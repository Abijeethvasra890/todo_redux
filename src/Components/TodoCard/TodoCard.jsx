import React from 'react';
import EditTodo from '../EditTodo/EditTodo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';
import CompleteTodo from '../CompleteTodo/CompleteTodo';

const TodoCard = ({ todo, isGridView }) => {
  let bgcard;
  if (todo.priority === "P0") bgcard = 'bg-amber-500';
  else if (todo.priority === "P1") bgcard = 'bg-amber-300';
  else bgcard = 'bg-amber-200';

  const cardClassName = `p-4 rounded-lg shadow-md ${todo.complete ? 'bg-green-200' : bgcard} ${isGridView ? '' : 'justify-between flex w-full'}`;

  return (
    <div className={cardClassName}>
      <div>
        <div>
          <div className={`flex ${isGridView ? 'justify-between':''}`}>
            <h3 className="text-xl text-black font-semibold">{todo.name}</h3>
            {isGridView && <CompleteTodo todo={todo} />}
          </div>
          <h5 className="text-lg text-black font-semibold mb-2">{todo.priority}</h5>
          <p className="text-gray-600">{todo.description}</p>
          <p className="text-gray-600">{todo.dueDate}</p>
        </div>
        
      </div>
      
      <div className={`flex ${isGridView ? 'flex-col sm:flex-row justify-around md:gap-2' : 'flex-row items-center justify-end gap-2'}`}>
      {!isGridView && <div className='flex flex-col'>
          <div className='flex justify-end'>
            <CompleteTodo todo={todo} />
          </div>
          <div className='flex gap-2'>
            <EditTodo todo={todo} />
            <DeleteTodo todoId={todo.id} />
          </div>
        </div>
      }

      {isGridView&&
        <div className='flex gap-5 justify-between'>
          <EditTodo todo={todo} />
          <DeleteTodo todoId={todo.id} />
        </div>
      }
      </div>
    </div>
  );
};

export default TodoCard;
