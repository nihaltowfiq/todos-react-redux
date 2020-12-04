import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addToDo } from "../redux/actions";

function ToDoInput(props) {
  const nameRef = useRef();
  return (
    <Container fluid>
      <Row className="my-4 justify-content-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = nameRef.current.value;
            props.dispatch(addToDo(input));
            nameRef.current.value = "";
          }}
          className="form-inline"
        >
          <input className="col form-control" ref={nameRef} type="text" />
          <button type="submit" className="btn btn-success mx-2">
            Add
          </button>
        </form>
      </Row>
    </Container>
  );
}

export default connect()(ToDoInput);
