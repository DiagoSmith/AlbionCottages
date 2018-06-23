import React from "react";
import { HomeContainer, Hero, HeroText, DatepickerContainer } from "./style";
// import {CottageMap} from '../../Helpers/CottageMap';
import DatePickerContainer from "../../Containers/DatePickerContainer";

const Home = () => {
  // console.log(CottageMap.get(256));
  return (
    <React.Fragment>
      <HomeContainer>
        <Hero>
          <HeroText>Welcome to the Albion, your home away from home</HeroText>
        </Hero>
        {/* <SearchBar></SearchBar> */}
      </HomeContainer>
      <DatePickerContainer />
    </React.Fragment>
  );
};

export default Home;
