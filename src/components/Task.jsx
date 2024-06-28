import Button from "./Button";
import Input from "./Input";
export default function Task({ project }) {
  function createTask() {
    // Add create task functionality here
  }

  // Add delete functionality here

  return (
    <section id="task-list">
      <form>
        <div className="flex items-center gap-3">
          <Input id="task-title" type="text">
            Tasks
          </Input>
          <Button secondary={true} toggleClick={createTask}>
            Add Task
          </Button>
        </div>
      </form>
      {project.task ? (
        <ul className=" bg-stone-200 p-4 py-8">
          {project.tasks.map((task, index) => (
            <li key={index} className="flex justify-between py-2">
              <p>{task}</p>
              <button className="text-stone-600 hover:text-red-600">
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>This project does not have any task yet.</p>
      )}
    </section>
  );
}
