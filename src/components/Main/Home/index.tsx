import { Profile } from "../../Profile"
import { MainHomeContainer, Ranking } from "./styles"

interface MainHomeProps {
  left: JSX.Element
  children: JSX.Element[]
}

export const MainHome = ({ children, left }: MainHomeProps) => {
  return (
    <MainHomeContainer>
      <aside>
        {left}
      </aside>
      <section>
        <h1>Feed</h1>

        {children}
      </section>
      <Ranking>
        <h2>#Ranking of the week</h2>
        <div></div>

        <div>
          <section>
            <span>1°</span>
            <Profile variant="ranking" imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"/>
          </section>

          <section>
            <span>2°</span>
            <Profile variant="ranking" imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"/>
          </section>

          <section>
            <span>3°</span>
            <Profile variant="ranking" imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"/>
          </section>

          <section>
            <span>4°</span>
            <Profile variant="ranking" imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"/>
          </section>

          <section>
            <span>5°</span>
            <Profile variant="ranking" imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4"/>
          </section>
        </div>
      </Ranking>
    </MainHomeContainer>
  )
}