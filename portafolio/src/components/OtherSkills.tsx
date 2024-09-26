import styled from "styled-components";
import useWindowWith from "../hooks/useWindowWith";

interface learningSkills {
  icon: React.ElementType;
  text: string;
}

interface LearningSkillsProps {
  learningSkills: learningSkills[];
  columns: number;
  columnsMax768px: number;
}

const OtherSkills: React.FC<LearningSkillsProps> = ({
  learningSkills,
  columns,
  columnsMax768px,
}) => {
  const windowWith = useWindowWith();
  const numColumns = windowWith > 768 ? columns : columnsMax768px;

  return (
    <SkillsStyled className="SkillsStyled" columns={numColumns}>
      {learningSkills.map((item, key) => (
        <IndividualSkillStyled key={key} className="StyledIcon">
          <StyledIcon>
            <item.icon />
          </StyledIcon>
          <SkillsText className="skills-text">{item.text}</SkillsText>
        </IndividualSkillStyled>
      ))}
    </SkillsStyled>
  );
};

export default OtherSkills;

const SkillsStyled = styled.li<{ columns: number }>`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(${(props) => props.columnsMax768px}, 1fr);
  }
`;

const IndividualSkillStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledIcon = styled.span`
  display: flex;
  font-size: 2.5rem;
  align-self: center;
`;

const SkillsText = styled.span`
  margin: 0rem 0rem 1rem 1rem;
`;
