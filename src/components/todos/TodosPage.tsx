import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ITodo, todosContext } from "../../context/TodosContextProvider";
import ProcessTodo from "../../process/ProcessTodo";
import GoingOn from "../../trio/GoingOn";
import Made from "../../trio/Made";
import NeedToDo from "../../trio/NeedToDo";
import Navbar from "../mui/Navbar";
import Card from "./Card";

const TodosPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="btnDiv">
        <button onClick={() => navigate("/create")} className="btnAdd">
          ADD
        </button>
      </div>
      <div className="todosssss">
        <GoingOn />
        <NeedToDo />
        <Made />
      </div>
    </div>
  );
};

export default TodosPage;
