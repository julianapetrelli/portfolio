import React from "react";
import { ContainerTag, ContentTag } from "./style";

interface TagProps {
  value: Array<string>;
}

class Tag extends React.Component<TagProps> {
  render() {
    return (
      <ContainerTag>
        {
          this.props.value.map((item, i) => {
            return (
              <ContentTag key={i}>
                <p>{item}</p>
              </ContentTag>
            )
          })
        }
      </ContainerTag>
    );
  }
}

export default Tag;