import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  &.active {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 13px;
    line-height: 1, 3;
    letter-spacing: -0.5px;
    padding-bottom: 0;
    margin: 0;
  }

  &.active {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
