import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerSideRope = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  @media screen and (max-width: 992px) {
    img {
      display: none;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
  left: -${convertToRem(20)};

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0;
    margin-bottom: ${convertToRem(40)};
  }
`;
