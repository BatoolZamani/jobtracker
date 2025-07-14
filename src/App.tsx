import { NavbarWithDropdown } from "./components/layout/NavbarWithDropdown";
import MainLayout from "./components/layout/Mainlayout";
import KanbanBoard from "./components/Kanban/KanbanBoard";


function App() {
  return (
    <>
      <NavbarWithDropdown />
      
      <div className="p-4">
      <MainLayout>
      <KanbanBoard />
    </MainLayout>
      </div>
    </>
  );
}

export default App;