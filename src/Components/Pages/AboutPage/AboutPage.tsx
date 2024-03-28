import {useState } from "react";

import SlidingMenu from "../../NavComponents/SlidingMenu/SlidingMenu";

import { links } from "../../Router/BrowserRouter";
import PageHeader from "../PageHeader/PageHeader";
import '../Page.css'
import About from "./About";
function AboutPage() {
    
    const [isSlidingMenuOpen, setIsSlidingMenuOpen] = useState<boolean>(false)
    

    

  return (
    <div className="page-container scrollable">
        <PageHeader setIsSlidingMenuOpen={setIsSlidingMenuOpen}/>
        <main className="page-main">
          <About/>
        </main>
        <SlidingMenu isOpen={isSlidingMenuOpen} setIsOpen={setIsSlidingMenuOpen} links={links}/>
    </div>
  );
}

export default AboutPage;
