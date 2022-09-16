import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    position: relative;
    padding: 15px 0;
  }

  a {
    position: relative;
    display: inline-block;
    color: #626262;
    text-decoration: none;
    font-weight: 400;
    font-size: ${convertToRem(16)};
    padding: 30px 20px 5px 20px;
  }

  a:after {
    content: "";
    bottom: 0;
    display: block;
    height: ${convertToRem(1)};
    left: 50%;
    position: absolute;
    background: #A7A7A7;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
`;