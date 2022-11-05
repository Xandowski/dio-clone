import { BeGlobalButton, Hamburger, Menu, NavBarButton } from "./styles"
import Logo from '../../assets/images/logo.svg'
import LogoMinimized from '../../assets/images/logo-minimized.png'
import LogoHome from '../../assets/images/logoHome.svg'
import { Link } from "react-router-dom"
import { useState } from "react"
import { Form } from "../Form/Search"
import { Profile } from "../Profile"

interface NavbarProps {
  isHomePage?: boolean
}

export const Navbar = ({isHomePage}:NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Menu
      isMenuOpen={isMenuOpen}
      isHomePage={isHomePage}
    >
      {isHomePage ? <div>
        <img src={LogoHome} alt="dio logo" />
        <img src={LogoMinimized} alt="dio logo" />
      </div> : <img src={Logo} alt="dio logo" />
      }

      {isHomePage && (
        <Form />
      )}
      
      {isHomePage ? (
          <>
            <ul>
              <li>
                <Link to="/lives">Live Coding</Link>
              </li>
              <li>
                <BeGlobalButton 
                  to="/global"
                >Be Global</BeGlobalButton>
              </li>
            </ul> 
            <Profile imageUrl="https://avatars.githubusercontent.com/u/40218226?v=4" variant="navbar"/>
          </>
        ) : (
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <NavBarButton to="/login">ENTRAR</NavBarButton>
            </li>
            <li>
              <NavBarButton 
                variant="secondary"
                to="/register"
              >CADASTRAR</NavBarButton>
            </li>
          </ul>
        )
      }

      <Hamburger
        onClick={handleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
    </Menu>
  )
}