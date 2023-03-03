import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todosContext } from "../../context/TodosContextProvider";

const AddTodo = () => {
  const navigate = useNavigate();
  const { addTodo } = useContext(todosContext);

  const [todo, setTodo] = useState({
    description: "",
  });

  return (
    <Box>
      <TextField
        fullWidth
        sx={{ m: 1 }}
        variant="outlined"
        id="standart-basic"
        label="название"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <Button
        onClick={() => {
          addTodo(todo);
          navigate("/");
        }}
      >
        ADD TODO
      </Button>
    </Box>
  );
};

export default AddTodo;
