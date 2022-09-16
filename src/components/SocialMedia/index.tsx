import React from "react";
import { ContainerSocialMedia } from "./style";
import Instagram from "../../assets/img/instagram.svg"
import GitHub from "../../assets/img/github.svg"
import Twitter from "../../assets/img/twitter.svg"
import Facebook from "../../assets/img/facebook.svg"

class SocialMedia extends React.Component {
  render() {
    return (
      <ContainerSocialMedia>
        <a href="https://www.instagram.com/devjulia_/" target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>

        <a href="https://github.com/juliatangerino" target="_blank">
          <img src={GitHub} alt="GitHub" />
        </a>

        <a href="https://twitter.com/JulianaTangeri1" target="_blank">
          <img src={Twitter} alt="Twitter" />
        </a>

        <a href="https://www.facebook.com/Juuuh.tangerino.2/" target="_blank">
          <img src={Facebook} alt="Facebook" />
        </a>
      </ContainerSocialMedia>
    );
  }
}

export default SocialMedia;