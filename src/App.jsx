import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import { useState, useRef } from "react";
import NoProjectMain from "./components/NoProjectMain";
import CreateProject from "./components/CreateProject";

function App() {
  const projectData = useRef();

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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
        ...prevState,
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
        tasks={projectState.tasks}
        ondeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
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
        tasks: prevState.tasks.filter((task) => task.projectId !== id), // Remove tasks related to the deleted project
      };
    });
  }

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const maxId =
        prevState.tasks.length > 0
          ? Math.max(...prevState.tasks.map((t) => t.id))
          : 0;
      const taskId = maxId + 1;
      const newTasks = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
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
