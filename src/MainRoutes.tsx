import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/todos/AddTodo";
import TodosPage from "./components/todos/TodosPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/create" element={<AddTodo />} />
    </Routes>
  );
};

export default MainRoutes;
