import styled from "styled-components";
import inputSearchIcon from "../../../Assets/Images/inputSearchIcon.svg";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 20px; 
`;

export const Input = styled.input`
  width: 432px;
  height: 48px;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  padding-left: 64px;
  background-image: url(${inputSearchIcon});
  background-repeat: no-repeat;
  background-position: 24px center;
  background-size: 24px 24px;
`;
