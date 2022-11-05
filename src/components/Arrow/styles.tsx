import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

interface ArrowButtonProps {
  right?: boolean
}

export const ArrowBackButton = styled(MdArrowBackIos)<ArrowButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  left: 0;
  top: 50%;
  color: white;
  font-size: 3rem;
  width: fit-content;
`

export const ArrowForwardButton = styled(MdArrowForwardIos)<ArrowButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  right: -10px;
  top: 50%;
  color: white;
  font-size: 3rem;
  width: fit-content;
`