import React from "react";
import { string } from "prop-types";
import { HeroImage, HeroText, SubText } from "../style";

export const HeroBanner = ({ image, title }) => {
  const imagePath = require(`${image}`);
  return (
    <HeroImage imagePath={imagePath}>
      <HeroText> {title} </HeroText>
      <SubText />
    </HeroImage>
  );
};

HeroBanner.propTypes = {
  image: string.isRequired,
  title: string.isRequired
};
