import styled from "styled-components"

interface FormContainerProps {
  buttonText: string
}

export const FormContainer = styled.form<FormContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  fieldset {
    label {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #565656;
      color: #8647ad;
      margin-bottom: 1rem;


      &:focus-within {
        border-bottom-color: #8647ad;
      }

      input {
        border: none;
        width: 100%;
        padding: 0.5rem;
        background: transparent;

        &:focus {
          outline: none;
        }
      }
    }
    
    div:nth-child(1) {
      margin-bottom: 3rem;
      
      > p {
        color: #bf1650;
        font-size: 0.8rem;
        display: inline-block;
        margin-bottom: 1rem;

        ::before {
          display: inline;
          content: "⚠ ";
        }
      }
    }

    div:nth-child(3) {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      flex-direction: ${({buttonText}) => buttonText  === 'criar minha conta grátis' &&'column'};
      gap: ${({buttonText}) => buttonText  === 'criar minha conta grátis' &&'3rem'};

      span {
        font-size: 1rem;
        font-weight: normal;

        span {
          color: #8647ad;
        }
      }

      p {
        font-size: 1rem;
        font-weight: normal;
      }
      
      a{
        font-weight: 500;
        &:hover {
          text-decoration: underline;
        }
      }
      a:nth-child(1) {
        color: ${({buttonText}) => buttonText  === 'criar minha conta grátis' ? '#23dd6d' : '#b1d044'};
        
      }
      a:nth-child(2) {
        color: #1fbe7a;
      }
    }

    
  }

  

  @media only screen and (max-width: 576px) {
    fieldset {
      div:nth-child(3) {
        align-items: center;

        a:nth-child(1) {
          
          
        }
      }
    }
  }
`
