import { useState } from 'react';
import InfoBtn from '../../../../Buttons/InfoBtn/InfoBtn';
import { ProjectsDataType } from '../Projects/Projects';
import './ProjectItem.css'
import '../../../Scrollbar.css'
import CloseBtn from '../../../../Buttons/CloseBtn/CloseBtn';
import SkillsGrid from './SkillsGrid/SkillsGrid';
import ProjectLink from './ProjectLink/ProjectLink';
type ProjectsItemPropsType = {
    projectData:ProjectsDataType
}

function ProjectItem({projectData}:ProjectsItemPropsType) {
   const [showInfo, setShowInfo] = useState<boolean>(false)
    return (
        <div className="project-item-container scrollable">
              <img src={projectData.imgsrc} className='project-img'/>
              <InfoBtn className='project-button' clickFn={() => {setShowInfo(true)}} iconClass='project-icon'/>
              {showInfo ? 
                <div className="info-container">
                  <h3 className='project-name'>{projectData.name}</h3>
                  <CloseBtn className='project-button' clickFn={() => {setShowInfo(false)}} iconClass='project-icon' iconStyle={{'color':'white'}}/>
                  <p className='project-description'>{projectData.description}</p>
                  <div className='project-links'>
                    {projectData.url ? <ProjectLink url={projectData.url} label='View'/>:null}
                    <ProjectLink url={projectData.github} label='GitHub'/>
                  </div>
                  <SkillsGrid skills={projectData.skills}/>
                </div>:
                  null
              }
        </div>
    );
  }
  
  export default ProjectItem;
  