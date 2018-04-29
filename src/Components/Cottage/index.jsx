import React from "react";
import { DividerText } from "./style";
import { HeroBanner } from "./Components/HeroBanner";
import ContactForm from "./Components/ContactForm";
import Carousel from "./Components/Carousel";
// import {PhotoGallery, ContactForm, HeroBanner, Details} from './Components'
// import CottageMap from '../../Helpers/CottageMap';

// console.log(CottageMap.get(256));

export const Cottage = () => {
  return (
    <React.Fragment>
      <HeroBanner image="./homeImage.jpg" title="Cottage 267" />
      <DividerText>
        A seaside sanctuary to relax and take in the sea air. Enjoy a sanctum
        within walking distance from the golden sands of the yorkshire coast.
      </DividerText>
      <Carousel
        imagePaths={[
          "./homeImage.jpg",
          "./homeImage.jpg",
          "./homeImage.jpg",
          "./homeImage.jpg",
          "./homeImage.jpg",
          "./homeImage.jpg",
          "./homeImage.jpg"
        ]}
      />
      {/*
            <Details>

            </Details>
             */}
      <ContactForm cottage="Cottage 267" />
    </React.Fragment>
  );
};
