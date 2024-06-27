import Button from "./Button";
export default function Sidebar({ addButtonClick }) {
  function handleClick() {
    addButtonClick();
  }
  return (
    <div className="grow-0 basis-80 bg-black text-white flex flex-col items-start pt-12 px-8 rounded-tr-2xl">
      <h2 className="uppercase text-xl font-semibold">Your Projects</h2>
      <Button secondary={false} toggleClick={handleClick}>
        + Add Project
      </Button>

      <section id="project-list" className="w-full">
        <ul className="mt-6 w-100">
          <li className="p-2  hover:bg-stone-900">Project 1</li>
          <li className="p-2  hover:bg-stone-900">Project 2</li>
          <li className="p-2  hover:bg-stone-900">Project 3</li>
        </ul>
      </section>
    </div>
  );
}
