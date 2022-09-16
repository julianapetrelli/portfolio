import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  a {
    padding: 0 ${convertToRem(6)};
  }

  & > a:nth-child(2) img {
    width: 2rem;
  }
`;