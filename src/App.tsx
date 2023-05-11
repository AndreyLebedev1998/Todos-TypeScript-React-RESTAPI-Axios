import React from "react";
import { useState, useEffect } from "react";
import ITodo from "./types/todo";
import "./App.css";
import TodoList from "./components/TodoList";
import axios from "axios";

const App: React.FC = () => {
  /* const [axiosTodo, setAxiosTodo] = useState([]); */
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (text) {
      axios.post("http://localhost:8000/todos", {
        text,
        completed: false,
      });
    }
    setText("");
  };

  const removeTodo = (id: number) => {
    return axios.delete(`http://localhost:8000/todos/${id}`);
  };

  const toggleTodo = (id: number, completed: boolean) => {
    return axios.patch(`http://localhost:8000/todos/${id}`, {
      completed: !completed,
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={addTodo} className="button">
          Добавить
        </button>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </form>
    </div>
  );
};

export default App;
