import { Link } from "gatsby"
import React, { useEffect} from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

//context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"
//Custom Hook

const Header = ({onCursor, toggleMenu, setToggleMenu}) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={ {
        y : 0,
        opacity : 1
      } }
      initial={ {
        y : -72,
        opacity : 0
      } }
      transition={ {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9]
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={ () => onCursor( 'hovered' ) }
            onMouseLeave={onCursor}
          >
            <Link to="/">GL</Link>
            <span
              onClick={ toggleTheme }
              onMouseEnter={ () => onCursor( 'pointer' ) }
            onMouseLeave={onCursor}
            ></span>
            <Link to="/">VER</Link>
          </Logo>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header