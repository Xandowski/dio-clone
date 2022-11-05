import { MainHomeContainer } from "./styles"

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
      <aside>
        <h2># Ranking</h2>
      </aside>
    </MainHomeContainer>
  )
}