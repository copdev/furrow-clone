import React from "react"
import { Container, Flex } from "../styles/globalStyles"
import { Instagram, Facebook } from "../../src/assets/svg/social-icons"
import { FooterContent, FooterNav, FooterSocials } from "../styles/footerStyles"

const Footer = ({onCursor}) => {
  return (
    <FooterNav>
      <Container>
        <Flex>
          <FooterContent wider>
            <p>+234808011122334</p>
            <p>info.copdev@gmail.com</p>
          </FooterContent>
          <FooterContent>
            <p>XY MV 009</p>
            <p>24, Lekki Lagos</p>
          </FooterContent>
          <FooterSocials>
            <a
              href="/"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Instagram
              />
            </a>
            <a
              href="/"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Facebook />
            </a>
          </FooterSocials>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
