import { Link } from "react-router-dom";
import styled from "styled-components";

interface MenuProps {
  isMenuOpen: boolean
  isHomePage?: boolean
}

interface NavbarButtonProps {
  variant?: string
}

export const Menu = styled.nav<MenuProps>`
  width: 100%;
  background-color: #151515;
  color: #f0fff0;
  padding: ${({isHomePage}) =>  isHomePage ? '1.25rem 1rem' : '0.7rem 1.1rem'};
  display: flex;

  ul {
    display: flex;
    align-items: center;
    justify-content: ${({isHomePage}) => !isHomePage && 'flex-end'};
    width: 100%;
    gap: 1rem;
  }

  > div:nth-child(1) {
    img:nth-child(1) {
      width: ${({isHomePage}) => isHomePage && '100px'};
    }

    img:nth-child(2) {
      display: ${({isHomePage}) => isHomePage && 'none'}
    }
  }

  img {
    width: ${({isMenuOpen}) => isMenuOpen && '200px' };
  }

  @media only screen and (max-width: 990px) {
    align-items: center;
    position: relative;
    padding: ${({isMenuOpen, isHomePage}) => isMenuOpen && !isHomePage ? '7rem 0' : isMenuOpen && isHomePage ? '1.25rem 1rem' : '0.5rem 1rem'};
    flex-direction: ${({isMenuOpen, isHomePage}) => isMenuOpen && !isHomePage && 'column'};
    justify-content: ${({isMenuOpen, isHomePage}) => isHomePage && isMenuOpen && 'flex-start'};
    height: ${({isMenuOpen, isHomePage}) => isMenuOpen && !isHomePage ? '100vh' : isHomePage && '70px'};
    gap: ${({isMenuOpen, isHomePage}) => isMenuOpen && !isHomePage && '3.5rem'};

    div {
      img:nth-child(1) {
        display: ${({isHomePage}) => isHomePage && 'none'};
      }

      img:nth-child(2) {
        display: block;
        width: ${({isHomePage}) => isHomePage && '40px'}
      }
    }
      
    ul {
      position: ${({isMenuOpen, isHomePage}) => isHomePage && isMenuOpen && 'absolute'};
      display: ${({isMenuOpen}) => !isMenuOpen && 'none'};
      flex-direction: ${({isMenuOpen}) => isMenuOpen && 'column'};
      align-items: ${({isMenuOpen, isHomePage}) => isHomePage && isMenuOpen && 'flex-end'};
      top: 70px;
      left: 0;
      gap: ${({isMenuOpen}) => isMenuOpen && '2.5rem'};

      li:nth-child(1) {
        font-size: ${({isMenuOpen}) => isMenuOpen && '1.5rem'};
        border-bottom: ${({isHomePage}) => isHomePage && '2px solid #3e3e3e'};
      }

      li {
        text-align: ${({isHomePage}) => isHomePage && 'right'};
        width: ${({isHomePage}) => isHomePage && '100%'};
        padding: ${({isHomePage}) => isHomePage && '1.5rem 1rem'};
      }
    }

    button {
      top: ${({isHomePage}) => isHomePage ? 'calc(70px/2)' : 'calc(52px/2)'};
      div {
        background-color: ${({isMenuOpen}) => isMenuOpen ? '#f34c5d' : '#fff'};
      }
      div:nth-child(1) {
        transform: ${({isMenuOpen}) => isMenuOpen && 'rotate(45deg) translate(4px, 4px)'};
        transition: all 0.3s;
      }

      div:nth-child(2) {
        opacity: ${({isMenuOpen}) => isMenuOpen && '0' };
        transition: all 0.3s;
      }

      div:nth-child(3) {
        transform: ${({isMenuOpen}) => isMenuOpen && 'rotate(-45deg) translate(4px, -4px)'};
        transition: all 0.3s;
      }
    }
  }
`

export const NavBarButton = styled(Link)<NavbarButtonProps>`
  background-color: #565656;
  border-radius: 2rem;
  padding: 0.2rem 1.5rem;

  &:hover {
    background-color: #e4105d;
  }

  @media only screen and (max-width: 990px) {
    border: 2px solid #8647ad;
    background-color:  ${({variant}) => variant === 'secondary' ? 'transparent' :'#8647ad' };
  }  
`

export const BeGlobalButton = styled(Link)`
  background-color: #e5e145;
  font-weight: 600;
  padding: 1rem 0.75rem;
  border-radius: 0.4rem;
  color: #000;

  @media only screen and (max-width: 768px) {

  }
`

export const Hamburger = styled.button`
  display: none;
  @media only screen and (max-width: 990px) {
    position: absolute;
    transform: translateY(-50%);
    right: 1rem;
    border: none;
    background-color: transparent;
    display: flex;
    width: 24px;
    height: 1rem;
    flex-direction: column;
    gap: 0.2rem;

    div {
      width: 100%;
      height: 0.2rem;
    }
  }
`
