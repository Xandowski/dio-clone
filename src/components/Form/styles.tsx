import styled from "styled-components";

interface InputSearchProps {
  isInputSearchHidden?: boolean
}

export const FormContainer = styled.form<InputSearchProps>`
  @media only screen and (max-width: 768px){
    width: ${({isInputSearchHidden}) => !isInputSearchHidden && '90vw'};
    &:focus-within {
      z-index: ${({isInputSearchHidden}) => !isInputSearchHidden && '10'};
    }

    input {
      display: ${({isInputSearchHidden}) => isInputSearchHidden ? 'none' : 'block'};
    }
  }
`

export const Fieldset = styled.fieldset`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #2d2d37;
  border: none;
  padding-left: 1rem;
  margin: 0 0.5rem;
  height: 2.75rem;

  svg {
    width: 24px;
    height: 24px;
  }

  &:focus-within {
    border: 1px solid #e4105d;
    background-color: #2d2d37;
  }

  @media only screen and (max-width: 768px) {
    background-color: transparent;
    width: 100%;
  }
`

export const InputSearch = styled.input`
  background: transparent;
  border: none;
  height: 2.125rem;
  padding-left: 0.25rem;
  caret-color: white;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
    display: block;
  }
`

export const SearchButton = styled.button`
  display: flex;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
`
