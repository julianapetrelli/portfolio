import React from "react";
import { ContainerButton } from "./style";

interface ButtonProps {
  text: string;
  color: string;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <ContainerButton color={this.props.color}>
        {this.props.text}
      </ContainerButton>
    );
  }
}

export default Button;
