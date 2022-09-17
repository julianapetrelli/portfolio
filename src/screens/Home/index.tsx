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
            <Menu />

            <ContainerHome>
               <SideRope />
               <ContentText>
                  <IntroText>
                     Hi! Welcome, I'm Juliana
                  </IntroText>
                  <Subtitle>
                     UX/UI Design & web developer
                  </Subtitle>
               </ContentText>
               <PencilCupImage src={PencilCup} alt="Cup with pencil" />
               <ContentSocialMedia>
                  <SocialMedia />
               </ContentSocialMedia>
            </ContainerHome>

            <Divider />

            <ContainerAbout>
               <ContentImage>
                  <BookshelfImage src={Bookshelf} alt="Cup with pencil" />
               </ContentImage>
               
               <ContentTextAbout>
                  <SimpleTitle text="About me" color="#EFE0E8" />
                  <p>
                  I like to explore new technologies and develop solutions. 
                  I am currently studying Cross-platform software development. 
                  I'm on my way to learning more about front-end technologies. 
                  In my free time, I make new projects, create arts and templates. 
                  Feel free to contact me for consultancy and pro bono volunteering, 
                  or just for an interesting discussion. You can email me at 
                  julianatangerino2017@gmail.com! I will try to answer 
                  as soon as I can. 🦄✨
                  </p>

                  <ContentTangs>
                     <Tag value={tags} />
                  </ContentTangs>
               </ContentTextAbout>
            </ContainerAbout>

            <ContainerPortfolio>
               <Title text="Portfolio" />
            </ContainerPortfolio>

         </Wrapper>
      </>
   );
}

export default Home;