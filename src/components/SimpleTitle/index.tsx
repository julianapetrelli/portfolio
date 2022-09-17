import React from "react";
import { ContainerSimpleTitle } from "./style";

interface SimpleTitleProps {
  text: string;
  color: string;
}

class SimpleTitle extends React.Component<SimpleTitleProps> {
  render() {
    return (
      <ContainerSimpleTitle>
        <div></div>
        <p>{this.props.text}</p>
      </ContainerSimpleTitle>
    );
  }
}

export default SimpleTitle;