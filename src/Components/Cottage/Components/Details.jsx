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
        <h3>Guests: 6</h3>
        <h3>Bedrooms: 3</h3>
        <h3>Beds: 4</h3>
      </FactColumn>
      <InfoColumn>
        <h1>Cottage Name</h1>
        <p>
          A seaside sanctuary to relax and take in the sea air. Enjoy a sanctum
          within walking distance from the golden sands of the yorkshire coast.
        </p>
        {/* <AmenitiesContainer>
          <AmenitiesTitle>Cottage Overview</AmenitiesTitle>
          <Amenities>
            <AmenityItem> 3 Double Bedrooms </AmenityItem>
            <AmenityItem> 1 Sofa-Bed </AmenityItem>
            <AmenityItem> 3 Bathrooms </AmenityItem>
            <AmenityItem> Fully Equiped Kitchen </AmenityItem>
          </Amenities>
        </AmenitiesContainer> */}
        <AmenitiesContainer>
          <AmenitiesTitle>Amenities</AmenitiesTitle>
          <Amenities>
            <AmenityItem> Dryer </AmenityItem>
            <AmenityItem> Washing Machine </AmenityItem>
            <AmenityItem> Towels and Bedding </AmenityItem>
            <AmenityItem> Wifi </AmenityItem>
            <AmenityItem> Kitchen </AmenityItem>
            <AmenityItem> TV </AmenityItem>
            <AmenityItem> Iron and Hairdryer </AmenityItem>
          </Amenities>
        </AmenitiesContainer>
        <AmenitiesContainer>
          <AmenitiesTitle>House Rules</AmenitiesTitle>
          <Amenities>
            <AmenityItem> 2 Night Minimum Stay </AmenityItem>
            <AmenityItem> Check-in after 4PM </AmenityItem>
            <AmenityItem> Checkout before 11AM </AmenityItem>
            <AmenityItem> No Smoking </AmenityItem>
            <AmenityItem> No Pets </AmenityItem>
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
