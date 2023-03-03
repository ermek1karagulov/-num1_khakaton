import React, { useEffect, useContext } from "react";
import { ITodo, todosContext } from "../context/TodosContextProvider";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

interface ProcessTodoProps {
  todo: ITodo;
}

const ProcessTodo = ({ todo }: ProcessTodoProps) => {
  const { addMadeProcess } = useContext(todosContext);

  return (
    <div>
      <div className="todos-page">
        <div className="description">
          <div>{todo.description}</div>
        </div>
        <div className="btn-eddel">
          <button onClick={() => addMadeProcess(todo)}>
            <KeyboardTabIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessTodo;
