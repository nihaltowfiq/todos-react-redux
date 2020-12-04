import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteToDo } from "../redux/actions";

function ToDoList(props) {
  return (
    <Container>
      <ul className="list-group my-2">
        {props.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-primary badge-pill">#{todo.id}</span>
            <span className="mx-auto">{todo.name}</span>
            <button className="btn btn-primary ml-auto">Edit</button>
            <button
              onClick={() => props.dispatch(deleteToDo(todo.todoId))}
              className="btn btn-danger mx-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(ToDoList);
