import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import { useRef, useState, forwardRef } from "react";
const CreateProject = forwardRef(function CreateProject(
  { addButtonClick, handleSaveProject },
  ref
) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  const modalRef = useRef();

  const [projectData, setProjectData] = useState({});

  function toggleAddProject() {
    addButtonClick();
  }

  function handleSave() {
    const inputTitle = projectTitle.current.value;
    const inputDescription = projectDescription.current.value;
    const inputDate = projectDate.current.value;

    // validation
    if (!inputTitle || !inputDescription || !inputDate) {
      modalRef.current.open();
      return;
    }

    handleSaveProject({
      title: inputTitle,
      description: inputDescription,
      date: inputDate,
    });
  }

  const project = useRef(projectData);

  // useImperativeHandle(ref, () => ({
  //   ...projectData,
  // }));

  return (
    <>
      <Modal ref={modalRef} buttonLabel="close">
        <h2 className="text-xl font-bold text-stone-800 mt-4">Invalid Input</h2>
        <p className="text-stone-400 py-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400">
          Please make sure to provide a valid value for every input field
        </p>
      </Modal>
      <section id="add-project" className="ps-10 w-[35rem]">
        <form action="" ref={project}>
          <div className="flex gap-3 justify-end">
            <Button
              toggleClick={toggleAddProject}
              secondary={true}
              type="reset"
            >
              Close
            </Button>
            <Button toggleClick={handleSave} type="button">
              Save
            </Button>
          </div>
          <Input ref={projectTitle} id="project-title" type="text">
            Title
          </Input>
          <Input
            ref={projectDescription}
            id="project-description"
            type="textarea"
          >
            Description
          </Input>
          <Input ref={projectDate} id="project-date" type="date">
            Date
          </Input>
        </form>
      </section>
    </>
  );
});

export default CreateProject;
