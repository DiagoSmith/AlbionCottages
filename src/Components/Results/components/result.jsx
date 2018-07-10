import React, { Component } from "react";
import PropTypes from "prop-types";

import { CottageMap } from "../../../Helpers/CottageMap";
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

const Result = ({ cottage }) => {
  const CottageInfo = CottageMap.get(cottage);

  const { name } = CottageInfo;

  return (
    <ResultWrapper>
      <LeftColumn>
        <CottageThumb src={imgsrc} />
      </LeftColumn>

      <MiddleColumn>
        <CottageTitle>{`Cottage ${name}`}</CottageTitle>
        <CottageDescription />
      </MiddleColumn>
      <RightColumn>
        {/* write helper function to calculate price based on length of stay,pass length of stay through in props  */}
        <Price>€200 </Price>
        <BookButton>Book me</BookButton>
      </RightColumn>
    </ResultWrapper>
  );
};

export default Result;
