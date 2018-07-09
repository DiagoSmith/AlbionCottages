import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ResultsTitle,
  ResultWrapper,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  BookButton,
  CottageTitle,
  CottageThumb,
  CottageDescription,
  Price
} from "./style";

import imgsrc from "../../Cottage/Components/homeImage.jpg";

const Result = cottage => {
  console.log(cottage);
  return (
    <ResultWrapper>
      <LeftColumn>
        <CottageThumb src={imgsrc} />
      </LeftColumn>

      <MiddleColumn>
        <CottageTitle>{cottage.cottage}</CottageTitle>
        <CottageDescription />
      </MiddleColumn>
      <RightColumn>
        <Price>£150 </Price>
        <BookButton>Book me</BookButton>
      </RightColumn>
    </ResultWrapper>
  );
};

export default Result;
