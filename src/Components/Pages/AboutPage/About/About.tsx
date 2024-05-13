import ExternalLink from '../../../ExternalLink/ExternalLink';
import './About.css'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function About() {

  return (
    <div className="about-container">
      <article className='about-main'>
        <h1 className="about-title">
            About Me
        </h1>
        <p className='about-text'>
          I'm an Enthusiastic Software Developer based in West Lothain passionate about Web Development.<br/>
          I graduated from Heriot Watt University with a First Class Honours Degree and i'm looking for opportunities to start my professional career.          
        </p>
        <div className='media-links'>
          <ExternalLink url='https://www.linkedin.com/in/daniel-bartmann-6b6680195/' Icon={FaLinkedinIn} className='media-link'/>
          <ExternalLink url='https://github.com/Dbartmann7?tab=repositories' Icon={FaGithub} className='media-link'/>
        </div>
      </article>
    </div>
  );
}

export default About;
