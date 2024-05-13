import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
};

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        deleteTodo(state, action) {
            const todoId = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        },
        editTodo(state, action) {
            const { id, name, description } = action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if (todoToEdit) {
              todoToEdit.name = name;
              todoToEdit.description = description;
            }
        },
        toggleTodoComplete(state, action) {
            const todoId = action.payload;
            const todoToToggle = state.todos.find(todo => todo.id === todoId);
            if (todoToToggle) {
              todoToToggle.complete = !todoToToggle.complete;
            }
          },
    },
});

export const { addTodo, deleteTodo, editTodo, toggleTodoComplete } = TodoSlice.actions;

export default TodoSlice.reducer;
