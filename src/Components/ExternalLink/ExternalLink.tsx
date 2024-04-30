import { IconType } from 'react-icons';
import './ExternalLink.css'

type ExternalLinkType = {
    url:string,
    label?:string,
    Icon?:IconType,
    className?:string
}

function ExternalLink({url, label, Icon, className}:ExternalLinkType) {

    return (
        <div className={`external-link-container ${className}`}>
              {label? label:null}
              {Icon ? <Icon className='external-link-icon'/>:null}
              <a className='external-link' href={url}/>
        </div>
    );
  }
  
  export default ExternalLink;
  