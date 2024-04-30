import CloseBtn from "../../../../../Buttons/CloseBtn/CloseBtn"
import ExternalLink from "../../../../../ExternalLink/ExternalLink"
import { ProjectsDataType } from "../../Projects/Projects"
import SkillsGrid from "../SkillsGrid/SkillsGrid"
import { FaGithub } from "react-icons/fa";
type ProjectInfoPropsType = {
    projectData:ProjectsDataType,
    setShowInfo:(a:boolean) =>void
}

const ProjectInfo = ({projectData, setShowInfo}:ProjectInfoPropsType) => {

    return(
        <div className="info-container">
            <h3 className='project-name'>{projectData.name}</h3>
            <CloseBtn className='project-button' clickFn={() => {setShowInfo(false)}} iconClass='project-icon' iconStyle={{'color':'white'}}/>
            <p className='project-description'>{projectData.description}</p>
            <div className='project-links'>
            {projectData.url ? <ExternalLink url={projectData.url} label='View'/>:null}
            <ExternalLink url={projectData.github} label='GitHub'/>
            </div>
            <SkillsGrid skills={projectData.skills}/>
        </div>
    )
}

export default ProjectInfo