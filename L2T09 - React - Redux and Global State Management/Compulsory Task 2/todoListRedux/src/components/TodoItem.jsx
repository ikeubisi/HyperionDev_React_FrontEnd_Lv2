import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo, editTodo, toggleComplete } from "../store/todoSlice";

const TodoItem = ({ completed, content, id }) => {
  const dispatch = useDispatch();

  // React Bootstrap Modal values
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Todo item editing learned from
  // Redux crud tutorial in react - redux toolkit tutorial (2022) YouTube.
  // Available at: https://youtu.be/bml92jhF4t8?feature=shared&amp;t=2370 (Accessed: 13 October 2023).
  const [editedTodo, setEditedTodo] = useState("");

  const handleCompleteClick = () => {
    // Pass opposite of whatever current completed value is for toggle effect
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    // Pass in id as payload so correct todo is deleted
    dispatch(deleteTodo({ id: id }));
  };

  const handleEditClick = () => {
    dispatch(editTodo({ id: id, content: editedTodo }));
  };

  return (
    // Fade out the completed todo via opacity and use bootstrap success color
    <li
      className={`list-group-item ${
        completed && "list-group-item-success opacity-50"
      }`}
    >
      <div className="d-flex justify-content-between">
        <input
          type="checkbox"
          className="mr-3"
          checked={completed}
          onChange={handleCompleteClick}
        ></input>

        {content}

        {/* Edit modal */}
        {/* Edit button only available if todo is not completed */}
        {completed === false && (
          <Button variant="warning" onClick={handleShow}>
            Edit Todo
          </Button>
        )}

        {/* React Boostrap modal, not putting it in its own component since the code gets very messy with props */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={(event) => {
                setEditedTodo(event.target.value);
              }}
              defaultValue={content}
              className="m-2"
            />
            {/* Edit button only available if todo is not completed and an actual edit has been done*/}
            {completed === false && editedTodo.length > 0 ? (
              <Button onClick={handleEditClick} variant="warning">
                Update
              </Button>
            ) : (
              <p>
                Please Edit the field or Close. The field must not be blank.
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoItem;
