import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 992px) {
    margin-top: ${convertToRem(80)};
    justify-content: flex-start;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

export const IntroText = styled.p`
  position: relative;
  top: -${convertToRem(90)};
  left: -${convertToRem(310)};
  display: flex;
  justify-content: center;
  width: ${convertToRem(600)};
  font-size: ${convertToRem(80)};
  color: #575757;
  font-weight: 700;

  @media screen and (max-width: 992px) {
    text-align: center;
    position: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${convertToRem(50)};
  }
`;

export const Subtitle = styled.p`
  position: relative;
  top: -${convertToRem(60)};
  left: -${convertToRem(466)};
  display: flex;
  justify-content: center;
  width: ${convertToRem(700)};
  font-size: ${convertToRem(25)};
  color: #757474;
  font-weight: 400;

  @media screen and (max-width: 992px) {
    text-align: center;
    position: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${convertToRem(20)};
  }
`;

export const PencilCupImage = styled.img`
  width: ${convertToRem(600)};

  @media screen and (max-width: 992px) {
    position: relative;
    left: ${convertToRem(30)};
    width: ${convertToRem(400)};
    margin-top: ${convertToRem(60)};
  }
`;

export const ContentSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  position: absolute;
  left: ${convertToRem(120)};
  bottom: ${convertToRem(20)};

  @media screen and (max-width: 992px) {
    position: relative;
    top: -${convertToRem(70)};
    left: 0;
  }
`;
