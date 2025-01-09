import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 94px;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 192px;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 40px;
  margin-left: 90px;
  padding: 0;
`;

export const Item = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  height: 48px;
  padding: 8px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid transparent;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
