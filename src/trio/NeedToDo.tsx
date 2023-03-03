import React, { useContext, useEffect } from "react";
import { ITodo, todosContext } from "../context/TodosContextProvider";
import ProcessTodo from "../process/ProcessTodo";

const NeedToDo = () => {
  const { process, getProcessTodos } = useContext(todosContext);
  useEffect(() => {
    getProcessTodos();
  }, []);

  return (
    <div style={{ width: "400px" }}>
      <h2>В процессе</h2>
      {process &&
        process.map((todo: ITodo, index: number) => (
          <ProcessTodo todo={todo} key={index} />
        ))}
    </div>
  );
};

export default NeedToDo;
