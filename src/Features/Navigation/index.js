import {
  Item,
  List,
  NavigationContainer,
  NavigationWrapper,
  StyledNavLink,
} from "./styled";
import { Container } from "../../Common/Container";
import { NavigationLogo } from "./Logo";
import { NavigationSearch } from "./Search";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Container>
        <NavigationWrapper>
          <NavigationLogo />
          <List>
            <Item>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="/people">People</StyledNavLink>
            </Item>
          </List>
          <NavigationSearch />
        </NavigationWrapper>
      </Container>
    </NavigationContainer>
  );
};
