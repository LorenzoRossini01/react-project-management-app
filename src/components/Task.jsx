import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
export default function Task({ tasks, onAddTask, onDeleteTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  const modalRef = useRef();

  function handleClick() {
    if (!enteredTask) {
      modalRef.current.open();
      return;
    }
    setEnteredTask("");
    onAddTask(enteredTask);
    // Add create task functionality here
  }

  function handleInputChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClearTask(id) {
    onDeleteTask(id);
  }

  // Add delete functionality here

  return (
    <>
      <Modal ref={modalRef} buttonLabel="close">
        <h2 className="text-xl font-bold text-stone-800 mt-4">
          Trying to add an empty Task
        </h2>
        <p className="text-stone-400 py-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400">
          Please make sure to provide a valid value for every input field
        </p>
      </Modal>

      <section id="task-list">
        <div className="flex items-center gap-3">
          <p className="flex flex-col gap-1 my-4">
            <label
              className="text-sm font-bold uppercase text-stone-500"
              htmlFor="task-title"
            >
              Tasks
            </label>
            <input
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              id="task-title"
              type="text"
              value={enteredTask}
              onChange={handleInputChange}
              onKeyUp={(e) => (e.keyCode === 13 ? handleClick() : null)}
            />
          </p>

          <Button secondary={true} toggleClick={handleClick}>
            Add Task
          </Button>
        </div>
        {tasks.length > 0 ? (
          <ul className=" bg-stone-100 p-4 mt-8 rounded-md">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between my-8 cursor-pointer"
              >
                <span>{task.text}</span>
                <button
                  className="text-stone-600 hover:text-red-600"
                  onClick={() => handleClearTask(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>This project does not have any task yet.</p>
        )}
      </section>
    </>
  );
}
