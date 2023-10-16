import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
// Where all the Add, Edit, Delete, Completed actions are
import { addTodo } from "../store/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef("");

  // Dispatch is the only way to update the store
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value.length > 0) {
      dispatch(
        addTodo({
          // Create unique id for keys & targeting todos for editing learned from
          // Stop using the UUID Library in JavaScript (2022) YouTube.
          // Available at: https://www.youtube.com/watch?v=cutfiIgyRao (Accessed: 13 October 2023).
          id: crypto.randomUUID(),
          // Value users types into form ends up here
          content: value,
        })
      );
    } else {
      return <h3 className="danger">You cannot have an empty todo!</h3>;
    }

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <h4>Add Todo to list</h4>
      <input
        ref={inputRef}
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      {/* Only show create button if we have a todo to add */}
      {inputRef.current.value && (
        <button type="submit" className="btn btn-primary mb-2">
          Add todo
        </button>
      )}
    </form>
  );
};

export default AddTodoForm;
