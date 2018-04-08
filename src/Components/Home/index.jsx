import React from "react";
import { HomeContainer, Hero, HeroText } from "./style";
import {CottageMap} from '../../Helpers/CottageMap';


const Home = () => {
  
  // console.log(CottageMap.get(256));
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
