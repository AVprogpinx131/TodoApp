import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./todo";
import AppDescription from "./AppDescription";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { MdAddCircle } from "react-icons/md";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Read todos from firestore

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = [];
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Add todos to firestore

  const addTodo = async (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      alert("Please type text to submit the todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: inputValue,
      completed: false,
    });
    setInputValue("");
  };

  // Update todos in firestore

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todos from firestore

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <AppDescription />
      <div className="total-todos">
        {todos.length === 1 ? <p>{`You have ${todos.length} todo`}</p> : ""}
        {todos.length >= 2 ? <p>{`You have ${todos.length} todos`}</p> : ""}
      </div>
      <form onSubmit={addTodo}>
        <div className="input-container">
          <input
            value={inputValue}
            onChange={changeInputValue}
            type="text"
            placeholder="Add a todo"
          />
          <MdAddCircle onClick={addTodo} className="submit-btn" />
        </div>
        {todos.map((todo, index) => {
          return (
            <div className="todo-container">
              <p className="todo-item">{`Item ${index + 1}`}</p>
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
