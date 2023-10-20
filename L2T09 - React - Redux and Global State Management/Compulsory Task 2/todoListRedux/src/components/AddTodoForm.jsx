import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addTodo } from "../store/reducers/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef("");

  // Dispatch is the only way to update the store
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    // Forbid entry of empty todos
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
      // Use Sweetalert2 Library instead of browser based alert() to create a customizable popup
      Swal.fire({
        title: "<strong>Error!</strong>",
        text: "Please provide a todo before clicking 'Add Todo' ",
        footer: "<i>Good luck with your list!</i>",
        icon: "error",
        iconColor: "red",
        confirmButtonText: "Understood! <i class='fa fa-thumbs-up'></i>",
      });
      return;
    }

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <h4>Add Todo to list</h4>
      <input
        className="form-control mb-2 mr-sm-2"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add todo"
        ref={inputRef}
        type="text"
        value={value}
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
