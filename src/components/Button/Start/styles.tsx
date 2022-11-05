import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  variant?: string
}

export const Button = styled(Link)<LinkProps>`
  border: none;
  color: white;
  background-color: #e4105d;
  font-weight: bold;
  text-transform: uppercase;
  outline: 1px solid #e4105d;
  outline-offset: 8px;
  border-radius: 1.5rem;
  width: 100%;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  max-width: 210px;
  align-self: flex-start;

  @media only screen and (max-width: 768px) {
    align-self: center;
  }

  /* &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  } */
`

export const InputButton = styled.input`
  color: white;
  background-color: #565656;
  border: none;
  width: 100%;
  max-width: 100%;
  padding: 0.6rem 1.5rem;
  outline: 1px solid #565656;
  outline-offset: 8px;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    align-self: center;
  }
`