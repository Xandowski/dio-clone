import { MainHome } from "../../components/Main/Home"
import { FeedContainer } from "../../components/Main/Home/styles"
import { Navbar } from "../../components/Navbar"
import { Profile } from "../../components/Profile"

export const Home = () => {
  return (
   <>
      <Navbar 
        isHomePage={true}
      />
      <MainHome
        left={<Profile imageUrl={"https://avatars.githubusercontent.com/u/40218226?v=4"} />}
      >
        <FeedContainer />
        <FeedContainer />
        <FeedContainer />
      </MainHome>
   </>

  )
}
