import React from "react";
import { StyledContainer, Logo, FooterItem } from "./style";

const items = [
  { details: "Albion Cottage Scarborough LTD", bold: true },
  { details: "Tel: (+44) 01723 862687", bold: true },
  { details: "albioncottagesscarborough@gmail.com", bold: true },
  { details: "The Albion, 140, 136 Castle Rd, Scarborough, YO11 1HY, England" }
];

const FooterItems = items.map(item => {
  <FooterItem bold={item.bold}>{item.details}</FooterItem>;
});

const Footer = () => (
  <StyledContainer>
    <Logo />
    {FooterItems}
  </StyledContainer>
);

export default Footer;
