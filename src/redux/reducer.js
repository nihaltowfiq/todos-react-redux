import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";

const initialStete = {
  todos: [],
};

export const reducer = (state = initialStete, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDos = {
        id: state.todos.length + 1,
        todoId: action.todoId,
        name: action.name,
      };
      const allToDos = [...state.todos, newToDos];
      return { todos: allToDos };
    case DELETE_TODO:
      const remainingToDos = state.todos.filter(
        (todo) => todo.todoId !== action.todoId
      );
      return { todos: remainingToDos };
    case UPDATE_TODO:
      break;
    default:
      return state;
  }
};
