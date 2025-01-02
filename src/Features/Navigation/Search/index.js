import { useLocation } from "react-router-dom";
import { Input, Wrapper } from "./styled";

export const NavigationSearch = () => {
  const location = useLocation();

  const placeholderText = location.pathname.includes("/movies")
    ? "Search for movies..."
    : "Search for people";

  return (
    <>
      <Wrapper>
        <Input placeholder={placeholderText} />
      </Wrapper>
    </>
  );
};
