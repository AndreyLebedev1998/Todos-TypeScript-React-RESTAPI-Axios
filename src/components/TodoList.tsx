import React from "react";
import ITodo from "../types/todo";
import TodoItem from "./TodoItem";

interface ITodoProps {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<ITodoProps> = (props) => {
  const { todos, removeTodo, toggleTodo } = props;
  return (
    <>
      {todos.map((el) => {
        return (
          <TodoItem
            key={el.id}
            {...el}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
