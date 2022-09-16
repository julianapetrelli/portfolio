import React from 'react';
import { ContainerSideRope, ContentButton } from './style';
import rope from '../../assets/img/rope.svg'
import Button from '../Button';

class SideRope extends React.Component {

  render() {
    return (
      <ContainerSideRope>
        <img src={rope} alt="Image of a string linked to content" />
        <ContentButton>
            <Button color="#8FB5AB" text="contact me"/>
        </ContentButton>
      </ContainerSideRope>
    );
  }
}

export default SideRope;