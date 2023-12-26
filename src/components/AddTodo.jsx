import { useState, useRef } from "react";

export default function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`no of upadates is ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo List"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
