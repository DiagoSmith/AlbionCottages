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

    console.log(images);

    return (
      <CarouselContainer>
        {imageCount >= imagePaths.length ? (
          <NukaCarousel swiping>{images}</NukaCarousel>
        ) : (
          <div>
            {/* add loading placeholder here */}
            {"loading..."}
            <div> {images}</div>
          </div>
        )}
      </CarouselContainer>
    );
  }
}

// Carousel.propTypes = {
//   imagePaths: arrayOf(string) //array or object of strings
// };

export default Carousel;