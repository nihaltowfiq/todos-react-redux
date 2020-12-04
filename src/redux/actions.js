export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addToDo = (name) => {
  return {
    type: ADD_TODO,
    todoId: Math.random(),
    name: name,
  };
};

export const deleteToDo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

export const updateToDo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
