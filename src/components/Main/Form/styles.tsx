import styled from "styled-components";

export const Main = styled.main`
  color: white;
  display: grid;
  grid-template-columns: 320px 328px;
  justify-content: center;
  gap: 16rem;
  padding-top: 4.25rem;
  
  p, h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  section {
    > div {
      border-radius: 1rem;
      background: linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%);
      height: 0.5rem;
      width: 32%;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
    gap: 4rem;
    
    section {
      padding: 0 5rem;
    }

    > section {
      > div {
          width: 20%;
      }
    }

    > section:nth-child(1) {
      p {
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width:576px) {
    padding-top: 2rem;
    section {
      padding: 0 2rem;
    }

    > section:nth-child(1) {
      display: none;
    }

    > section {
      > div {
        display: none;
      }
    }
  }
`