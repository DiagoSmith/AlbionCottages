import React from "react";
import { HomeContainer, Hero, StyledImage } from "./style";
import homeImage from "../../Assets/Images/homeImage.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <StyledImage src={homeImage} />
      </Hero>
      Step into seaside serendipity
      {/* <SearchBar></SearchBar> */}
    </HomeContainer>
  );
};

export default Home;
