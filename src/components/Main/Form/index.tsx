import { Form } from "../../Form"
import { Main } from "./styles"

interface MainFormProps {
  children: JSX.Element
}

export const MainForm = ({children}: MainFormProps) => {
  return (
    <Main>
       <section>
          <div></div>
          <p>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais dedsejadas.</p>
        </section>

        <section>
          <div></div>
          {children}
        </section>
    </Main>
  )
}