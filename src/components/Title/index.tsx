import React from "react";
import { ContainerTitle } from "./style";

interface TitleProps {
  text: string;
}

class Title extends React.Component<TitleProps> {
  render() {
    return (
      <ContainerTitle>
        <div></div>
        <p>{this.props.text}</p>
      </ContainerTitle>
    );
  }
}

export default Title;