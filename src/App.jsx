import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import { useState, useRef } from "react";
import NoProjectMain from "./components/NoProjectMain";
import CreateProject from "./components/CreateProject";

const PROJECT_FIRST = {
  title: "Project1",
  description: "Project description",
  date: "12-12-2024",
  tasks: ["task1", "task2"],
};
function App() {
  const projectData = useRef();

  // const [addProject, setAddProject] = useState(false);
  // const [addTask, setAddTask] = useState(false);
  // const [project, setProject] = useState({});
  // const [projectList, setProjectList] = useState([PROJECT_FIRST]);

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function toggleAddProject() {
    setProjectState((prevState) => {
      if (prevState.selectedProjectId === null) {
        return {
          ...prevState,
          selectedProjectId: undefined,
        };
      } else {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: prevState.projects.length + 1,
      };
      return {
        selectedProjectId: null,
        projects: [...prevState.projects, newProject],
      };
    });
    toggleAddProject();
  }

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectMain addButtonClick={toggleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <CreateProject
        addButtonClick={toggleAddProject}
        handleSaveProject={handleAddProject}
      />
    );
  } else {
    content = (
      <SelectedProject
        projects={projectState.projects}
        id={projectState.selectedProjectId}
        ondeleteProject={handleDeleteProject}
      ></SelectedProject>
    );
  }

  function projectDetailTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  }

  console.log(projectState);
  return (
    <main className="flex flex-row h-screen my-12">
      <Sidebar
        addButtonClick={toggleAddProject}
        projectList={projectState.projects}
        toggleProjectDetail={projectDetailTask}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
