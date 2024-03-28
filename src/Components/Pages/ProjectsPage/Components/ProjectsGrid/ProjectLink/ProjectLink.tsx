import './ProjectLink.css'

type ProjectLink = {
    url:string,
    label:string
}

function ProjectLink({url, label}:ProjectLink) {

    return (
        <div className="project-link-container">
              {label}
              <a className='project-link' href={url}/>
        </div>
    );
  }
  
  export default ProjectLink;
  