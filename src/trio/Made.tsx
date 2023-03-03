import React, { useContext, useEffect } from "react";
import { ITodo, todosContext } from "../context/TodosContextProvider";
import MadeLay from "../process/MadeLay";

const Made = () => {
  const { made, getMadeTodo } = useContext(todosContext);

  useEffect(() => {
    getMadeTodo();
  }, []);

  return (
    <div style={{ width: "400px" }}>
      <h2>Сделано</h2>
      {made &&
        made.map((todo: ITodo, index: number) => (
          <MadeLay todo={todo} key={index} />
        ))}
    </div>
  );
};

export default Made;
