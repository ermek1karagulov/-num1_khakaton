import React, { useContext } from "react";
import { ITodo, todosContext } from "../../context/TodosContextProvider";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

interface CardProps {
  todo: ITodo;
}

const Card: Function = ({ todo }: CardProps) => {
  const { addTodoProcess, deleteTodo } = useContext(todosContext);

  return (
    <div className="todos-page">
      <div className="description">
        <span>{todo.description}</span>
      </div>
      <div className="btn-eddel">
        <button onClick={() => addTodoProcess(todo)}>
          <KeyboardTabIcon />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <AutoDeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
