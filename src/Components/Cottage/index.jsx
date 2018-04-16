import React from "react";
import { DividerText } from "./style";
import { HeroBanner } from "./Components/HeroBanner";
import ContactForm from "./Components/ContactForm";
// import {PhotoGallery, ContactForm, HeroBanner, Details} from './Components'
// import CottageMap from '../../Helpers/CottageMap';

// console.log(CottageMap.get(256));

export const Cottage = () => {
  return (
    <React.Fragment>
      <HeroBanner image="./homeImage.jpg" title="Cottage 267" />
      <DividerText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
        amet porttitor enim. Quisque quam quam, sodales at felis in, interdum
        commodo magna.
      </DividerText>
      {/* <PhotoGallery>

            </PhotoGallery>
            <Details>

            </Details>
             */}
      <ContactForm />
    </React.Fragment>
  );
};
