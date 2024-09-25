interface skillsItems {
  label: string;
  icon: React.ElementType;
  porcentage: string;
}

interface SkillsProps {
  skillsItems: skillsItems[];
}

const Skills: React.FC<SkillsProps> = ({ skillsItems }) => {
  return (
    <section>
      <ul className="skills-user">
        {skillsItems.map((item) => (
          <li key={item.label} className={`${item.label}`}>
            <item.icon />
            <span className="skill-porcentage">{item.porcentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
