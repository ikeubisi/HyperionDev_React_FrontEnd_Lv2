import PropTypes from "prop-types";

const TodoItem = ({ content, completed }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed}></input>
          {content}
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
