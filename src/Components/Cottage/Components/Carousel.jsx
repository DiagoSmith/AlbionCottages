import React from "react";
import { arrayOf, string } from "prop-types";
import NukaCarousel from "nuka-carousel";
import {
  CarouselImage,
  StyledCarousel,
  CarouselContainer,
  CarouselController,
  CarouselDot
} from "../style";

class Carousel extends React.Component {
  static propTypes = {
    imagePaths: arrayOf(string).isRequired
  };

  state = {
    imageCount: 0
  };

  handleImageLoaded = () => {
    this.setState(prevState => ({ imageCount: prevState.imageCount + 1 }));
  };

  render() {
    const { imagePaths } = this.props;
    const { imageCount } = this.state;

    //Load in all the images;
    const images = imagePaths.map(imagePath => {
      const path = require(`${imagePath}`);
      return (
        <CarouselImage
          key={path}
          src={path}
          onLoad={() => this.handleImageLoaded()}
          alt="description"
        />
      );
    });

    return (
      <CarouselContainer>
        {imageCount >= imagePaths.length ? (
          <NukaCarousel renderBottomCenterControls={() => {}} swiping>
            {images}
          </NukaCarousel>
        ) : (
          <div>
            {/* add loading placeholder here */}
            "Images are loading..."
            <div style={{ visibility: "hidden" }}> {images}</div>
          </div>
        )}
      </CarouselContainer>
    );
  }
}

export default Carousel;
