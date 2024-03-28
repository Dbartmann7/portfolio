import { useState } from 'react';
import SkillsItem from './SkillItem';
import './SkillsGrid.css'

type SkillsGrid = {
    skills:string[]
}

function SkillsGrid({skills}:SkillsGrid) {
 
    return (
        <div className="skills-grid-container">
            {skills.map((skill) => {
                return <SkillsItem skill={skill}/>
            })}
        </div>
    );
  }
  
  export default SkillsGrid;
  