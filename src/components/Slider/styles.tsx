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
    justify-content: space-between;
    font-size: 50px;
    color: #fff;
    height: 100%;
    padding: 2rem;
    border-radius: 4px;
    transition: all 150ms linear 0s;

 

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

      &:hover{
        left: -4px;
        top: -4px;
      }
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
      align-items: flex-start;
      height: fit-content;
      padding: 0;
      background: #161221;

      span {
        display: flex;
        align-items: center;
        gap: 4px;

        svg {
          color: #e4105d;
          width: 16px;
          height: 16px;
        }

        > span{
          margin-left: 12px;
        }
      }
    }
  }
  
 }
`

export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: 1px solid #e4105d;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.25rem;

  &:hover {
    background-color: #e4105d;
  }
`