import { MainHome } from "../../components/Main/Home"
import { FeedContainer, FeedContent } from "../../components/Main/Home/styles"
import { Navbar } from "../../components/Navbar"
import { Profile } from "../../components/Profile"
import { AiFillFire } from "react-icons/ai"
import { FaCommentDots } from "react-icons/fa"
import Banner from "../../assets/images/banner.png"

export const Home = () => {
  return (
   <>
      <Navbar 
        isHomePage={true}
      />
      <MainHome
        left={<Profile imageUrl={"https://avatars.githubusercontent.com/u/40218226?v=4"} variant="side" />}
      >
        <FeedContainer>
          <img src={Banner} alt="" />
        
          <FeedContent>
            <Profile imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"
              variant="feed"
            />
            <section>
              <h2>Clonando site da dio, projeto para o bootcamp Oragen Tech +</h2>
              <p>Nesse artigo irei apresentar o meu clone da dio, apresentar as dificuldades e aprendizados... <a href=""><strong>Ver Mais</strong></a></p>
            </section>

            <footer>
              <div>
                <span>#JavaScript #React #Styled-Components #TypeScript</span>
              </div>
              <div>
                <span><AiFillFire/> 40</span>
                <span><FaCommentDots /> 3</span>
              </div>
            </footer>
          </FeedContent>
        </FeedContainer>

        <FeedContainer>
          <img src={Banner} alt="" />
        
          <FeedContent>
            <Profile imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"
              variant="feed"
            />
            <section>
              <h2>Clonando site da dio, projeto para o bootcamp Oragen Tech +</h2>
              <p>Nesse artigo irei apresentar o meu clone da dio, apresentar as dificuldades e aprendizados... <a href=""><strong>Ver Mais</strong></a></p>
            </section>

            <footer>
              <div>
                <span>#JavaScript #React #Styled-Components #TypeScript</span>
              </div>
              <div>
                <AiFillFire/>
                <FaCommentDots />
              </div>
            </footer>
          </FeedContent>
        </FeedContainer>
      </MainHome>
   </>

  )
}
