import styled from "styled-components";
import convertToRem from "../../utils/convertToRem"

export const ContainerMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;


    li {
      margin: ${convertToRem(40)} ${convertToRem(20)};
    }

    a {
      color: #626262;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      border: none;
      transition: all 0.3s ease-in-out;
    }

    a:hover {
      color: #575757;
      border-bottom: 1px solid #575757;
    }

`;