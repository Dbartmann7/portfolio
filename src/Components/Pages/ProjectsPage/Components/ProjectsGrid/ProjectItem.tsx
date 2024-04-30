import { useState } from 'react';
import InfoBtn from '../../../../Buttons/InfoBtn/InfoBtn';
import { ProjectsDataType } from '../Projects/Projects';
import './ProjectItem.css'
import '../../../Scrollbar.css'
import CloseBtn from '../../../../Buttons/CloseBtn/CloseBtn';
import SkillsGrid from './SkillsGrid/SkillsGrid';
import ExternalLink from '../../../../ExternalLink/ExternalLink';
import ProjectInfo from './ProjectInfo/ProjectInfo';
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
                <ProjectInfo projectData={projectData} setShowInfo={setShowInfo}/>:null
              }
        </div>
    );
  }

  export default ProjectItem;
  