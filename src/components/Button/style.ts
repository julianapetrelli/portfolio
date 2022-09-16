import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

interface ButtonProps {
  color?: string;
}

export const ContainerButton = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  background-color: ${(props) => (props.color ? props.color : "#8FB5AB")};
  border-radius: 40px;
  padding: ${convertToRem(16)} ${convertToRem(36)};
  color: #fff;
  font-size: ${convertToRem(16)};
  width: ${convertToRem(176)};
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #75a396;
  }
`;
