import axios from "axios";
import { createContext, useReducer } from "react";
import ProcessTodo from "../process/ProcessTodo";

const obj: any = {};
export const todosContext = createContext(obj);

export interface ITodo {
  description: string;
  id: number;
}

interface ITodosState {
  todos: ITodo[] | null;
  oneTodos: ITodo | null;
  process: ITodo[] | null;
  made: ITodo[] | null;
}

const INIT_STATE: ITodosState = {
  todos: null,
  oneTodos: null,
  process: null,
  made: null,
};

const reducer = (
  state = INIT_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "GET_TODOSS":
      return {
        ...state,
        process: action.payload,
      };
    case "GET_TODOSSs":
      return {
        ...state,
        made: action.payload,
      };
    case "GET_ONE_TODO":
      return {
        ...state,
        oneTodos: action.payload,
      };
    default:
      return state;
  }
};

const TodosContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getTodos() {
    try {
      const res = await axios("http://localhost:8000/todos");
      dispatch({
        type: "GET_TODOS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneTodo(id: number) {
    try {
      const res = await axios(`http://localhost:8000/todos/${id}`);
      dispatch({
        type: "GET_ONE_TODO",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo(todo: ITodo) {
    try {
      const res = await axios.post("http://localhost:8000/todos", {
        ...todo,
        id: Date.now().toString(),
      });
    } catch (error) {
      console.log(error);
    }
    getTodos();
  }

  async function addTodoProcess(todo: ITodo) {
    try {
      console.log(todo);
      const res = await axios.post("http://localhost:8000/in-process", todo);
      deleteTodo("todos", todo.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function addMadeProcess(todo: ITodo) {
    try {
      const res = await axios.post("http://localhost:8000/done", todo);
      deleteTodo("in-process", todo.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProcessTodos() {
    try {
      const res = await axios.get("http://localhost:8000/in-process");
      dispatch({
        type: "GET_TODOSS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getMadeTodo() {
    try {
      const res = await axios("http://localhost:8000/done");
      dispatch({
        type: "GET_TODOSSs",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTodo(path: string, id: number) {
    try {
      await axios.delete(`http://localhost:8000/${path}/${id}`);
      getProcessTodos();
      getMadeTodo();
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  let value = {
    todos: state.todos,
    oneTodos: state.oneTodos,
    process: state.process,
    made: state.made,

    getTodos,
    getOneTodo,
    addTodo,
    deleteTodo,
    addTodoProcess,
    getProcessTodos,
    getMadeTodo,
    addMadeProcess,
  };

  return (
    <todosContext.Provider value={value}>{children}</todosContext.Provider>
  );
};

export default TodosContextProvider;
