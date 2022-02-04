import {Container} from "./styles/Container.styled";
import {FlexStyle} from "./styles/Flex.styled";
import React from 'react';
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return <StyledFooter>
      <Container>
          <img src="./images/logo_white.svg" alt=""/>

          <FlexStyle>
          
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

<SocialIcons/>
          </FlexStyle>

          <p> &copy; 2021 Hubble. All rights reserved</p>
      </Container>
  </StyledFooter>;
}
