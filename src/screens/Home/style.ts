import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -${convertToRem(60)};
  height: 100vh;

  @media screen and (max-width: 992px) {
    margin-top: ${convertToRem(80)};
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const ContentText = styled.div`
  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
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
    flex-wrap: wrap;
    font-size: ${convertToRem(50)};
    width: ${convertToRem(400)};
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
    width: ${convertToRem(350)};
    margin-top: ${convertToRem(60)};
  }
`;

export const ContentSocialMedia = styled.div`
  display: block;
  align-items: center;
  justify-self: flex-start;
  position: absolute;
  left: ${convertToRem(10)};
  bottom: ${convertToRem(80)};

  @media screen and (max-width: 992px) {
    position: relative;
    top: ${convertToRem(30)};
    left: 0;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  top: ${convertToRem(90)};
`;

export const BookshelfImage = styled.img`
  width: ${convertToRem(550)};

  @media screen and (max-width: 992px) {
    position: relative;
    left: ${convertToRem(30)};
    width: ${convertToRem(350)};
    margin-top: ${convertToRem(60)};
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${convertToRem(300)};
`;

export const ContentTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > p {
    font-size: ${convertToRem(18)};
    font-weight: 400;
    color: #757474;
    width: ${convertToRem(550)};
  }
`;

export const ContentTangs = styled.p`
  margin: ${convertToRem(60)} 0;
`;

export const ContainerPortfolio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: ${convertToRem(160)};
`;