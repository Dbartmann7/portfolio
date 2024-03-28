import './SkillItem.css'

type SkillItemPropType = {
    skill:string
}

function SkillsItem({skill}:SkillItemPropType) {
 
    return (
        <div className="skill-item-container">
            {skill}
        </div>
    );
  }
  
  export default SkillsItem;
  