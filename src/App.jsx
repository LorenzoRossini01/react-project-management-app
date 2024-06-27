import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState } from "react";

function App() {
  const [addingProject, setAddingProject] = useState(false);
  function toggleAddProject() {
    setAddingProject(!addingProject);
  }
  return (
    <main className="flex flex-row mt-12">
      <Sidebar addButtonClick={toggleAddProject}></Sidebar>
      <MainContent
        addButtonClick={toggleAddProject}
        addingProject={addingProject}
      ></MainContent>
    </main>
  );
}

export default App;
