import React, { useContext, useEffect } from "react";
import Card from "../components/todos/Card";
import { ITodo, todosContext } from "../context/TodosContextProvider";

const GoingOn = () => {
  const { todos, getTodos } = useContext(todosContext);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h2 style={{ marginLeft: "10rem" }}>Нужно сделать</h2>
      {todos &&
        todos.map((todo: ITodo, index: number) => (
          <Card todo={todo} key={index} />
        ))}
    </div>
  );
};

export default GoingOn;
