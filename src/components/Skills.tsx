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
              className={`skill-bar-progress-${item.label}`}
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 100px;

   @media (max-width: 768px) {
   grid-template-columns: 1fr
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
  color: ${(props) => props.theme.colors.navyBlue};

  .skill-porcentage {
    margin-left: 1rem;
    font-size: 25px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.slateBlue};
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
  background-color: ${(props) => props.theme.colors.silver};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.navyBlue};
  transition: width 0.3s ease-in-out;
`;
