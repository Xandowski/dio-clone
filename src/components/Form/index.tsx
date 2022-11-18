import { useState } from "react"
import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import { FormContainer } from "./styles"
import { useForm, Controller  } from 'react-hook-form'
import { InputButton } from "../Button/Start/styles"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

interface UserData {
  name: string
  email: string
  cell: string
  password: string
}
export interface FormProps {
  title: string
  description: string
  buttonText: string
} 

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  cell: yup.string().min(11, 'DDD+NUMERO').required('Campo obrigatório'),
  password: yup.string().min(4, 'A senha precisa ter no mínimo 4 dítigos').required('Campo obrigatório'),
}).required()

export const Form = ({title, description, buttonText}: FormProps) => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  const defaultValues = {
    name: '',
    email: '',
    cell: '',
    password: ''
  }
  const { register, control, handleSubmit, formState: { errors, isValid } } = useForm<UserData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  })
  

  const onSubmit = (data: UserData) => {
    if(data) {
      navigate('/home')
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} buttonText={buttonText}>
      <h1>{title}</h1>
      <span>{description}</span>
      <fieldset>
        <div>
          {
            buttonText === 'criar minha conta grátis' && (
              <>
                <label htmlFor="name">
                  <MdPerson />
                  <input
                    type="text" 
                    placeholder="Nome completo"
                    {...register("name")}
                  />
                </label>
                {errors.name?.message && <p>{errors.name.message}</p>}
              </>
            ) 
          }

          <label htmlFor="email">
            <MdEmail />
            <Controller
               
              name="email"
              control={control}
              render={({ field }) => <input type="email" {...field}  placeholder="E-mail"/>}
            />
            
            
          </label>
          {buttonText === 'criar minha conta grátis' ? (
            errors.email?.message && <p>{errors.email.message}</p>
          ) :  (
            errors.email && <p>Por favor digite seu email.</p>
          )}
          {
            buttonText === 'criar minha conta grátis' && (
              <>
                <label htmlFor="cell">
                  <MdPhone />
                  <Controller
                     
                    name="cell"
                    control={control}
                    render={({ field }) => <input type="text" {...field} placeholder="Celular ex: 11961234567"/>}
                  />
                </label>
                {errors.cell?.message && <p>{errors.cell?.message}</p>}
              </>
            ) 
          }
          
          <label htmlFor="password">
            <MdLock />
            <Controller
               
              name="password"
              control={control}
              render={({ field }) => <input type="password" {...field} placeholder="Senha" />}
            />
          </label>
          {buttonText === 'criar minha conta grátis' ? (
            errors.password?.message && <p>{errors.password?.message}</p>
          ) :  (
            errors.password && <p>Digite sua senha.</p>
          )}
        </div>

        <InputButton
         type="submit"
         value="Entrar"
        />
          
        <div>
          {buttonText === 'entrar' ? (
            <>
              <Link to="/reset-password">Esqueci minha senha.</Link>
              <Link to="/register">Criar conta.</Link>
            </>
          ) : (
            <>
              <span>Ao clicar em "criar minha conta grátis", declaro que aceito as <span>Políticas de Privacidade</span> e os <span>Termos de Uso</span> da DIO.</span>

              <p>Já tenho uma conta. <span>
                  <Link to="/login">
                    Fazer login
                  </Link>
                </span></p>
            </>
          )}
        </div>
      </fieldset>
    </FormContainer>
  )
}