import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  padding: 0 2rem;
  display: flex;
  width: 100%;
  height: 516px;
  
  
 div {
  width: 100%;
  > div:nth-child(n) {
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    height: 300px;
  }
 }
`