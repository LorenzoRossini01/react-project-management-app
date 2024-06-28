import Button from "./Button";
import defaultImage from "../assets/no-projects.png";

export default function NoProjectMain({ addButtonClick }) {
  function toggleAddProject() {
    addButtonClick();
  }
  return (
    <section
      id="no-project"
      className=" grow flex flex-col justify-center items-center"
    >
      <img
        src={defaultImage}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-800 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400">
        Select a project or get started with a new one
      </p>
      <Button toggleClick={toggleAddProject}>Create new project</Button>
    </section>
  );
}
