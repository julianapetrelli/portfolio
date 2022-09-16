import { Wrapper, Container, IntroText, Subtitle, PencilCupImage, ContentSocialMedia } from './style';
import Menu from "../../components/Menu";
import SideRope from "../../components/SideRope";
import PencilCup from "../../assets/img/glass-for-pencils.svg"
import SocialMedia from "../../components/SocialMedia";
import Divider from "../../components/Divider";

function Home() {
   return (
      <div>
         <Wrapper>
            <Menu />
            <Container>
               <SideRope />
               <div>
                  <IntroText>
                     Hi! Welcome, I'm Juliana
                  </IntroText>
                  <Subtitle>
                     UX/UI Design & web developer
                  </Subtitle>
               </div>
               <PencilCupImage src={PencilCup} alt="Cup with pencil" />
            </Container>
            <ContentSocialMedia>
               <SocialMedia />
            </ContentSocialMedia>
            <Divider />
         </Wrapper>
      </div>
   );
}

export default Home;