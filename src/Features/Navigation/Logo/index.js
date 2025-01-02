import { TitleLink } from "../../../Assets/Styles/styled";
import { CameraIcon, Title, Wrapper } from "./styled";

export const NavigationLogo = () => {
  return (
    <Wrapper>
      <TitleLink to="/movie">
        <CameraIcon />
        <Title>Movies Browser</Title>
      </TitleLink>
    </Wrapper>
  );
};
