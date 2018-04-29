import React from "react";
import {
  DetailsContainer,
  InfoColumn,
  FactColumn,
  Amenities,
  AmenitiesContainer,
  AmenitiesTitle,
  AmenityItem
} from "../style";

const Details = ({ amenities, description }) => {
  //   const amenitylist = amenities.map(amenity => <li>{amenity}</li>);
  return (
    <DetailsContainer>
      <FactColumn>
        <h3>Bedrooms: 7</h3>
        <h3>Bedrooms: 7</h3>
        <h3>Bedrooms: 7</h3>
      </FactColumn>
      <InfoColumn>
        <h1>Cottage Name</h1>
        <p>
          A seaside sanctuary to relax and take in the sea air. Enjoy a sanctum
          within walking distance from the golden sands of the yorkshire coast.
        </p>
        <AmenitiesContainer>
          <AmenitiesTitle>Amenities</AmenitiesTitle>
          <Amenities>
            <AmenityItem> Dryer </AmenityItem>
            <AmenityItem> Towels </AmenityItem>
            <AmenityItem> Wifi </AmenityItem>
            <AmenityItem> Dryer </AmenityItem>
            <AmenityItem> Towels </AmenityItem>
            <AmenityItem> Towels </AmenityItem>
          </Amenities>
        </AmenitiesContainer>
      </InfoColumn>
    </DetailsContainer>
  );
};

export default Details;

// Name
// # Bedrooms - 3 BEDROOMS, 3 BATHROOMS, 4 BEDS, 6 GUESTS.
// Amenities, - DRYER, TOWELS AND BEDDING, IRON, TV , WASHING MACHINE, WIFI
// Images
