import React, { useContext, useEffect } from "react";
import { ITodo, todosContext } from "../context/TodosContextProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface MadeLayProps {
  todo: ITodo;
}

const MadeLay = ({ todo }: MadeLayProps) => {
  const { getMadeTodo } = useContext(todosContext);

  useEffect(() => {
    getMadeTodo();
  }, []);

  return (
    <div>
      <div className="todos-page">
        <div className="description">
          <div>{todo.description}</div>
        </div>
        <div className="btn-eddel">
          <button>
            <CheckCircleIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MadeLay;
