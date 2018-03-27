import React from "react";
import { HomeContainer, Hero, HeroText } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroText>Welcome to the Albion, your home away from home</HeroText>
      </Hero>
      {/* <SearchBar></SearchBar> */}
    </HomeContainer>
  );
};

export default Home;
