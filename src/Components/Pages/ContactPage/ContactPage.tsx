import { useState } from "react";
import { links } from "../../Router/BrowserRouter";
import PageHeader from "../PageHeader/PageHeader";
import SlidingMenu from "../../NavComponents/SlidingMenu/SlidingMenu";
import './ContactPage.css'
function ContactPage() {
  const [isSlidingMenuOpen, setIsSlidingMenuOpen] = useState<boolean>(false)
    return (
      <div className="page-container">
          <PageHeader setIsSlidingMenuOpen={setIsSlidingMenuOpen}/>
          <SlidingMenu isOpen={isSlidingMenuOpen} setIsOpen={setIsSlidingMenuOpen} links={links}/>
          <main className="page-main">
            
          </main>
      </div>
    );
}
  
export default ContactPage;
  