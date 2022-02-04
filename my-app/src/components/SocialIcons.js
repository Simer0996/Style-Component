import React from 'react';
import {FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";
import {StyledSocialicons} from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return <StyledSocialicons>
  <li><a href="https://facebook.com"> <FaFacebook/></a></li>
 <li> <a href="https://linkedin.com"> <FaLinkedin/></a></li>
 <li><a href="https://twitter.com"> <FaTwitter/></a></li>
  
  </StyledSocialicons>;
}
