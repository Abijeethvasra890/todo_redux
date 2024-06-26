import { createSlice } from "@reduxjs/toolkit";
import { addTodoForUser, deleteTodoForUser, getTodosForUser, updateTodoForUser } from "../../Helpers/TodoData";
import { auth } from "../../Firebase/firebase_config";


export const fetchTodosAsync = () => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        const userTodos = await getTodosForUser(userId);
        dispatch(setTodos(userTodos));
    } catch (error) {
        dispatch(todoError(error.message));
    }
};

export const addTodoAsync = (todoData) => async (dispatch) => {
    try {
        //console.log("AddTodoAsync");
        const userId = auth.currentUser.uid;
       // console.log(userId);
        todoData = await addTodoForUser(userId, todoData);
        dispatch(addTodo(todoData));
    } catch (error) {
        dispatch(todoError(error.message));
    }
};

export const deleteTodoAsync = (todoId) => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        await deleteTodoForUser(userId, todoId);
        dispatch(deleteTodo(todoId));
    } catch (error) {
        dispatch(todoError(error.message));
    }
};

export const updateTodoAsync = (todoId, updatedTodoData) => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        await updateTodoForUser(userId, todoId, updatedTodoData);
        dispatch(editTodo({ id: todoId, ...updatedTodoData }));
    } catch (error) {
        dispatch(todoError(error.message));
    }
};

export const toggleTodoCompleteAsync = (todoId, updatedTodoData) => async (dispatch) => {
    try {
        //console.log("todo Slice");
        const userId = auth.currentUser.uid;
       // console.log(todoId);
        updatedTodoData = { ...updatedTodoData, complete: !updatedTodoData.complete };
       // console.log(updatedTodoData.complete);
        await updateTodoForUser(userId, todoId, updatedTodoData);
        dispatch(editTodo({ id: todoId, ...updatedTodoData }));
        
    } catch (error) {
        dispatch(todoError(error.message));
    }
};

const initialState = {
    todos: [],
    status: 'idle',
    error: null,
};

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const todoId = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        },
        editTodo: (state, action) => {
            const { id, ...updatedTodoData } = action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if (todoToEdit) {
                Object.assign(todoToEdit, updatedTodoData);
            }
        },
        toggleTodoComplete: (state, action) => {
            const todoId = action.payload;
            const todoToToggle = state.todos.find(todo => todo.id === todoId);
            if (todoToToggle) {
                todoToToggle.complete = !todoToToggle.complete;
            }
        },
        todoError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
            state.status = 'succeeded';
        },
        clearTodos: (state) => {
            state.todos = [];
        }
    },
});

export const { addTodo, deleteTodo, editTodo, toggleTodoComplete, todoError, setTodos, clearTodos } = TodoSlice.actions;

export default TodoSlice.reducer;
