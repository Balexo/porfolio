import styled from "styled-components";

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
    <SkillsStyled className="SkillsStyled">
      {skillsItems.map((item) => (
        <IndividualSkillStyled key={item.label} className={`${item.label}`}>
          <StyledIcon title={item.label} className="skill-icon">
            <item.icon />
            <span className="skill-porcentage">{item.porcentage}</span>
          </StyledIcon>

          <ProgressBar>
            <Progress
              className="skill-bar-progress"
              style={{ width: `${item.porcentage}` }}
            />
          </ProgressBar>
        </IndividualSkillStyled>
      ))}
    </SkillsStyled>
  );
};

export default Skills;

const SkillsStyled = styled.ul`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

const IndividualSkillStyled = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  alig-items: center;
`;

const StyledIcon = styled.div`
  display: flex;
  font-size: 2.5rem;
  align-self: center;
  margin-bottom: 0.5rem;
  color: var(--icons);

  .skill-porcentage {
    margin-left: 1rem;
    font-size: 25px;
    display: flex;
    align-items: center;
    color: var(--icons);
  }

  @media (max-width: 768px) {
    font-size: 35px;

    .skill-porcentage {
      font-size: 25px;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--heading);
  transition: width 0.3s ease-in-out;
`;
