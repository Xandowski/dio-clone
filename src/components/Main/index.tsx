import { Start } from "../Button/Start"
import { MainContainer } from "./styles"

export const Main = () => {
  return (
    <MainContainer>
        <div></div>
        <section>
          <h1>
            <span>Programe</span> 
            o seu futuro global agora!
          </h1>
          

          <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>

          <Start to="/login" text="Acessar Agora"/>
        </section>

        <section>
          <h2>
            Explore nossas
            <span> carreiras</span>
          </h2>

          <p>Desbloqueie o seu próximo nível de conhecimento e esja contratado pelas maiores empresas de tecnologia do páis.</p>
        </section>
      </MainContainer>
  )
}