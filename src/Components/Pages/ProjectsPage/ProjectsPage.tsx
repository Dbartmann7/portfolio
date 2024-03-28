import { useState } from "react";
import { links } from "../../Router/BrowserRouter";
import PageHeader from "../PageHeader/PageHeader";
import SlidingMenu from "../../NavComponents/SlidingMenu/SlidingMenu";
import ProjectsGrid from "./Components/ProjectsGrid/ProjectsGrid";
import './ProjectsPage.css'
import '../Scrollbar.css'

function ProjectsPage() {
  const [isSlidingMenuOpen, setIsSlidingMenuOpen] = useState<boolean>(false)
    return (
      <div className="page-container scrollable">
          <PageHeader setIsSlidingMenuOpen={setIsSlidingMenuOpen}/>
          <SlidingMenu isOpen={isSlidingMenuOpen} setIsOpen={setIsSlidingMenuOpen} links={links}/>
          <main className="page-main">
            <ProjectsGrid/>
          </main>
      </div>
    );
  }
  
  export default ProjectsPage;
  