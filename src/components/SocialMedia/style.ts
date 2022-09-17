import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerSocialMedia = styled.div`
  display: block;

  a {
    padding: 0 ${convertToRem(6)};
  }

  & > a:nth-child(2) img {
    width: 2rem;
  }
`;
