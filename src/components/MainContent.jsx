import defaultImage from "../assets/no-projects.png";
import Button from "./Button";

export default function MainContent({ addButtonClick, addingProject }) {
  function toggleAddProject() {
    addButtonClick();
  }

  return (
    <main className="grow h-screen pt-20">
      {!addingProject && (
        <section id="no-project" className="flex flex-col items-center">
          <img src={defaultImage} alt="" className="w-20 h-20" />
          <h1 className="text-xl font-bold text-stone-800">
            No Project Selected
          </h1>
          <p className="text-stone-400">
            Select a project or get started with a new one
          </p>
          <Button toggleClick={toggleAddProject}>Create new project</Button>
        </section>
      )}

      {addingProject && (
        <section id="add-project" className="ps-10 pe-32">
          <form action="">
            <div className="flex gap-3 justify-end">
              <Button toggleClick={toggleAddProject} secondary={true}>
                Close
              </Button>
              <Button>Save</Button>
            </div>
            <p className="flex flex-col gap-1 my-4">
              <label
                htmlFor="project-name"
                className="text-sm font-bold uppercase text-stone-500"
              >
                title
              </label>
              <input
                type="text"
                id="project-name"
                name="project-name"
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                required
              />
            </p>
            <p className="flex flex-col gap-1 my-4">
              <label
                htmlFor="project-description"
                className="text-sm font-bold uppercase text-stone-500"
              >
                description
              </label>
              <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></textarea>
            </p>
            <p className="flex flex-col gap-1 my-4">
              <label
                htmlFor="project-image"
                className="text-sm font-bold uppercase text-stone-500"
              >
                image
              </label>
              <input
                type="date"
                id="project-image"
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                name="project-image"
              />
            </p>
          </form>
        </section>
      )}
    </main>
  );
}
