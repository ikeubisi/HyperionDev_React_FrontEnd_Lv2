import { useRef } from "react";

export default function TodoCreateForm() {
  const inputRef = useRef("");

  return (
    <div>
      <div className="form-group">
        <input
          className="form-control m-2"
          defaultValue={""}
          placeholder="Add Todo"
          ref={inputRef}
          type="text"
        />
      </div>
      <hr />
      <div className="formGroup">
        <button className="btn btn-success">Create Todo</button>
      </div>
    </div>
  );
}
