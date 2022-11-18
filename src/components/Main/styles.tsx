import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  color: white;
  background-color: #1e192c;
  width: 100%;

  > div:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 530px;
    max-height: 530px;
    background: linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%), url(https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png);
    background-size: cover;
    background-position: center center;
  }

  > div:nth-child(2) {
    position: absolute;
    z-index: 2;
    width: 100%;

    > section:nth-child(1){
      align-items: flex-start;
      width: 680px;
      padding: 4rem 0 0 20rem;

      h1 {
        font-size: 3.5rem;
        span{
          display: block;
          margin-bottom: 0;
        }
      }

      p {
        text-align: left;
      }
    }

    section:nth-child(2) {
      margin-top: 4rem;
      padding: 4.5rem 18rem 1rem;
    }
  }

  

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 3rem;
    }

    h1,h2 {
      span {  
        margin-bottom: 1rem;
        background: -webkit-linear-gradient(45deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%);
        -webkit-background-clip:text;
        background-clip:text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      max-width: 640px;
      text-align: center;
      margin: 2.6rem 0 ;
    }
  }

  @media only screen and (max-width: 768px) {
    > div:nth-child(1) {
      background: linear-gradient(360deg, #1e192c 40.95%, rgba(0, 0, 0, 0.7) 100%), url(https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png);
      background-size: cover;
      background-position: center center;
      max-height: 480px;
    }

    > div:nth-child(2) {
      padding: 0 2rem;
      > section:nth-child(1) {
        width: 100%;
        padding: 4rem 0 0 0;
        p {
          text-align: center;
        }
      }

      > section:nth-child(2) {
        margin-top: 0;
      }

      > section:nth-child(1) {
        h1 {
          font-size: 2.3rem;
          text-align: center;
        }
        
      }

      > section:nth-child(2){
        h2 {
          font-size: 1.875rem;
          text-align: center;

          span {
            display: block;
          }
        }

        p{
          text-align: center;
        }
      }
    }
  }
`