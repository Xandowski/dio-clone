import { Form } from "../../components/Form"
import { MainForm } from "../../components/Main/Form"
import { Navbar } from "../../components/Navbar"

export const Login = () => {
  return(
    <>
      <Navbar />
    
      <MainForm>
        <Form 
          title="Já tem cadastro?"
          description="Faça seu login e make the change._"
          buttonText="entrar"
        />
      </MainForm>
    </>
  )
}