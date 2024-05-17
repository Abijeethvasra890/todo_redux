// Import necessary Firebase functions
import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase_config";

// Function to add a todo for the logged-in user
export const addTodoForUser = async (uid, todoData) => {
    try {
        //console.log("addTodoForUser");
        const docRef = await addDoc(collection(db, `users/${uid}/todos`), todoData);
        return { id: docRef.id, ...todoData };
    } catch (error) {
        alert("Error adding todo: " + error.message);
    }
}

// Function to get all todos for the logged-in user
export const getTodosForUser = async (uid) => {
    try {
        const q = query(collection(db, `users/${uid}/todos`));
        const querySnapshot = await getDocs(q);
        const todos = [];
        querySnapshot.forEach((doc) => {
            todos.push({ id: doc.id, ...doc.data() });
        });
        return todos;
    } catch (error) {
        alert("Error getting todos: " + error.message);
        return [];
    }
}

// Function to update a todo for the logged-in user
export const updateTodoForUser = async (uid, todoId, updatedTodoData) => {
    try {
       // console.log("tododata helper");
        const todoRef = doc(db, `users/${uid}/todos`, todoId);
        await updateDoc(todoRef, updatedTodoData);
       // alert("Todo updated successfully");
    } catch (error) {
        alert("Error updating todo: " + error.message);
    }
}

// Function to delete a todo for the logged-in user
export const deleteTodoForUser = async (uid, todoId) => {
    try {
        const todoRef = doc(db, `users/${uid}/todos`, todoId);
        await deleteDoc(todoRef);
        //alert("Todo deleted successfully");
    } catch (error) {
        alert("Error deleting todo: " + error.message);
    }
}
