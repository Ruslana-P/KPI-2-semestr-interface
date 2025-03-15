import { StyledCnt } from "./styled";
import CardComponent from "./Card";

const Applications = () => {
  return (
    <StyledCnt>
      <CardComponent
        name="Петренко Олег Вікторівна"
        grade="5"
        field="Математика"
      />
      <CardComponent
        name="Петренко Ольга Вікторівна"
        grade="3"
        field="Філологічні науки"
      />
    </StyledCnt>
  );
};

export default Applications;
