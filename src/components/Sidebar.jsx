import Button from "./Button";
export default function Sidebar({
  addButtonClick,
  projectList,
  toggleProjectDetail,
  selectedProjectId,
}) {
  function handleClick() {
    addButtonClick();
  }

  const projectTitle = projectList.map((project) => project.title);

  function handleProjectClick(index) {
    toggleProjectDetail(index);
  }

  return (
    <aside className="grow-0 w-1/3 lg:w-72 bg-black text-stone-50 flex flex-col items-start py-16 px-8 rounded-r-2xl">
      <h2 className="uppercase text-xl font-semibold">Your Projects</h2>
      <Button secondary={false} toggleClick={handleClick}>
        + Add Project
      </Button>

      <section id="project-list" className="w-full">
        <ul className="mt-8 w-full">
          {
            projectTitle.map((project, index) => {
              let classes = "p-2  hover:bg-stone-900 capitalize";
              if (selectedProjectId == index + 1) {
                classes += " bg-stone-800";
              }

              return (
                <li
                  key={index}
                  className={classes}
                  onClick={() => handleProjectClick(index + 1)}
                >
                  {project}
                </li>
              );
            })

            // Render the project list items here. For example:
          }
        </ul>
      </section>
    </aside>
  );
}
