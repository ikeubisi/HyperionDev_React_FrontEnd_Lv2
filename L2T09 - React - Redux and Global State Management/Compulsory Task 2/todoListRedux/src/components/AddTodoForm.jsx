import { useState } from "react";
import { useDispatch } from "react-redux";
// Where all the Add, Edit, Delete, Completed actions are
import { addTodo } from "../store/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  // Dispatch is the only way to update the store
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        // Value users types into form ends up here
        content: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Todo Task</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
