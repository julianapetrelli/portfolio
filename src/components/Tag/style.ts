import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

interface TagProps {
  color?: string;
}

export const ContainerTag = styled.div<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr;
  grid-gap: ${convertToRem(10)};
`;

export const ContentTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.color ? props.color : "#8FB5AB")};
  border-radius: 40px;
  color: #fff;
  height: ${convertToRem(35)};
  cursor: pointer;

  & > p {
    font-size: ${convertToRem(14)};
    padding: 0 ${convertToRem(10)};
    white-space: nowrap;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #75a396;
  }
`;