import { 
   Wrapper, 
   ContainerHome, 
   ContentText, 
   IntroText, 
   Subtitle, 
   PencilCupImage, 
   ContentSocialMedia, 
   ContainerAbout, 
   ContentImage,
   BookshelfImage, 
   ContentTextAbout,
   ContentTangs,
   ContainerPortfolio
} from './style';
import Menu from "../../components/Menu";
import SideRope from "../../components/SideRope";
import PencilCup from "../../assets/img/glass-for-pencils.svg"
import SocialMedia from "../../components/SocialMedia";
import Divider from "../../components/Divider";
import Bookshelf from "../../assets/img/bookshelf.svg";
import SimpleTitle from '../../components/SimpleTitle';
import Tag from '../../components/Tag';
import Title from '../../components/Title';

function Home() {
   const tags = [
      "UX/UI Design",
      "React",
      "React Native",
      "Vue",
      "JavaScript",
      "TypeScript",
      "Docker",
      "Git"
   ]

   return (
      <>
         <Wrapper>
         </Wrapper>
      </>
   );
}

export default Home;