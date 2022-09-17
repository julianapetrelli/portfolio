import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:nth-child(1) div {
    position: relative;
    top: -${convertToRem(100)};
    height: ${convertToRem(50)};
    width: ${convertToRem(200)};
    background-color: #efe0e8;
    border-radius: 40px;
  }

  & > div:nth-child(2) div {
    position: relative;
    top: -${convertToRem(10)};
    height: ${convertToRem(50)};
    width: ${convertToRem(200)};
    background-color: #8fb5ab;
    border-radius: 40px;
  }

  @media screen and (max-width: 992px) {
    & > div:nth-child(1) div {
      height: ${convertToRem(40)};
      width: ${convertToRem(200)};
    }

    & > div:nth-child(2) div {
      height: ${convertToRem(40)};
      width: ${convertToRem(200)};
    }
  }
`;
