import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../store/todoSlice";
import { useState } from "react";

const TodoItem = ({ id, content, completed }) => {
  const dispatch = useDispatch();

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
    dispatch(editTodo({ id, content }));
  };

  return (
    // Fade out the completed todo and use bootstrap success color
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
        <input type="text" defaultValue={content} />
        {/* Edit button only available if todo is not completed */}
        {completed === false && (
          <button onClick={handleEditClick} className="btn btn-secondary">
            Edit
          </button>
        )}
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
