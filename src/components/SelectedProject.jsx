import Task from "./Task";
import { useRef, useState } from "react";

export default function SelectedProject({
  projects,
  id,
  tasks,
  ondeleteProject,
  onAddTask,
  onDeleteTask,
}) {
  function handleDelete(id) {
    ondeleteProject(id);
    // Add delete functionality here
  }

  // console.log(projects);
  // console.log(id);

  const project = projects.find((project) => project.id === id);
  // console.log(project);

  return (
    <section id="add-task" className="ps-10 pe-32  w-full">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
        <div className="title flex justify-between capitalize">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button
            onClick={() => handleDelete(project.id)}
            className="text-stone-600 hover:text-red-600"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 py-4">{project.date}</p>
        <p className="pb-4 whitespace-pre-wrap">{project.description}</p>
      </header>

      <Task
        project={project}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </section>
  );
}
