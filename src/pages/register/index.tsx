import { Form } from "../../components/Form"
import { MainForm } from "../../components/Main/Form"
import { Navbar } from "../../components/Navbar"

export const Register = () => {
  return (
    <>
      <Navbar />

      <MainForm>
        <Form 
          title="Comece agora grátis"
          description="Crie sua conta e make the change._"
          buttonText="criar minha conta grátis"
        />
      </MainForm>
    </>
  )
}