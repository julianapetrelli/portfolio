import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

interface ButtonProps {
  color?: string;
}

export const ContainerSimpleTitle = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${convertToRem(40)};

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => (props.color ? props.color : "#EFE0E8")};
        height: ${convertToRem(60)};
        width: ${convertToRem(10)};
        border-radius: 40px;
        margin-right: ${convertToRem(10)};
    }

    & > p {
        font-size: ${convertToRem(30)};
        font-weight: 600;
        color: #575757;
    }
`;
