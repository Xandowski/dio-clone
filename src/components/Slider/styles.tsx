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
    background: #e4105d;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    height: 100%;
    padding: 2rem;
    border-radius: 4px;

    &:after {
      content: "";
      position: absolute;
      background: #161221;
      border-radius: 4px;
      height: 100%;
      width: 100%;
      left: -3px;
      top: -3px;
      z-index: -99;
    }

    > h2 {
      font-size: 2.75rem;
      font-weight: 500;
    }

    > ul {
      font-size: 1rem;
      margin-top: 2rem;

      > li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        > div {
          background-color: #7b747a;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          margin: 0 5px;
        }
        color: #7b747a;
      }
    }

    > div {
      font-size: 0.8rem;
      display: flex;
      padding: 0;
      background: #161221;
    }
  }
  
 }
`