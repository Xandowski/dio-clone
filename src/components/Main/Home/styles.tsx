import styled from "styled-components";

export const MainHomeContainer = styled.main`
  color: white;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 2.75rem 8.75rem 0;
  width: 100%;

  > section:nth-child(2) {
    width: 100%;

    > h1 {
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    > div {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
   grid-template-columns: 1fr;

   > section:nth-child(2) {
    
    > h1 {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
   }
  }

  @media only screen and (max-width: 1440px) {
    padding: 2.75rem 1rem 0;
  }
`

export const FeedContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  height: fit-content;
  
  > img {
    height: 40%;
    width: 100%;
  }

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    /* width: 90%; */
    > img {
      height: 40%;
      width: 100%;
    }
  }


`

export const FeedContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div:nth-child(2) {
      display: flex;
      span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-weight: 600;
        margin-right: 1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    > section:nth-child(2){
      > h2 {
        font-size: 1.3rem;
      }
    }
  }
`