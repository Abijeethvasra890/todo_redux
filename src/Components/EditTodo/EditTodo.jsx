import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal'; 
import { editTodo } from '../../redux/Slices/TodoSlice';


const EditTodo = ({ todo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleSaveChanges = () => {
    // Dispatch editTodo action with the updated todo data
    dispatch(editTodo({ id: todo.id, name: editedName, description: editedDescription }));
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-orange-700 hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleOpenModal}
      >
        Edit Todo
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Todo Modal"
        className="bg-white w-11/12 p-10 mx-auto my-10 flex flex-col items-center"
      >
        <h2 className='text-xl font-semibold mb-2'>Edit Todo</h2>
        <label>Todo Name: </label>
        <input
          type="text"
          value={editedName}
          onChange={handleNameChange}
          className="py-3 m-2 px-4 w-64 border-2 border-gray-200 rounded-lg text-md"
        />
        <label>Todo Description: </label>
        <textarea
          value={editedDescription}
          onChange={handleDescriptionChange}
          className="py-3 px-4 w-64 border-2 border-gray-200 rounded-lg text-md"
          rows={4}
        />
        <div className="mt-4">
          <button
            onClick={handleSaveChanges}
            className="bg-green-800 hover:bg-black text-white font-bold py-2 px-4 rounded mr-4"
          >
            Save Changes
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EditTodo;
