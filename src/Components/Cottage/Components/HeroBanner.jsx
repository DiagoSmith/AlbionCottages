import React from "react";
import { string, object } from "prop-types";
import { HeroImage, HeroText, SubText } from "../style";

export const HeroBanner = ({ image, title, details }) => {
  const imagePath = require(`${image}`);
  
  return (
    <HeroImage imagePath={imagePath}>
      <HeroText> {title} </HeroText>
      <SubText> 5 Bedrooms </SubText>
      <SubText> Sleeps 6 </SubText>
      <SubText> £150 per Night</SubText>
    </HeroImage>
  );
};

HeroBanner.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  details: object.isRequired
};
