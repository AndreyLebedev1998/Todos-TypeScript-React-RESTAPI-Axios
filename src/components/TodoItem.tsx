import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import ITodo from "../types/todo";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, completed: boolean) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, text, completed, removeTodo, toggleTodo } = props;

  const textDecor = {
    textDecoration: "line-through",
  };

  const textDecorNone = {
    textDecoration: "none",
  };

  return (
    <div className="todo">
      <p style={completed ? textDecor : textDecorNone}>{text}</p>
      <div>
        <button className="check">
          <AiOutlineCheck onClick={() => toggleTodo(id, completed)} />
        </button>
        <button className="delete">
          <MdDeleteForever onClick={() => removeTodo(id)} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
