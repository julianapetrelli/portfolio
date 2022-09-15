import React from 'react';
import { ContainerMenu } from './style';

class Menu extends React.Component {

  render() {
    return (
      <ContainerMenu>
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#"> About </a>
        </li>
        <li>
          <a href="#"> Portfolio </a>
        </li>
        <li>
          <a href="#"> Projects </a>
        </li>
        <li>
          <a href="#"> Contact </a>
        </li>
      </ContainerMenu>
    );
  }
}

export default Menu;