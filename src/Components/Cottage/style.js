import styled from "styled-components";
import NukaCarousel from "nuka-carousel";

//HERO IMAGE
export const HeroImage = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  background-image: ${props => `linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.5)
      ), url(${props.imagePath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const TextWrapper = styled.div`
  color: white;
  z-index: 10;
  width: 80%;
  margin: auto;
`;
export const HeroText = styled.h1`
  font-size: 4rem;
`;

export const SubText = styled.p`
  /* z-index: 10;
  color: white; */
  text-transform: uppercase;
  font-size: 25px;
  /* padding-left: 6rem;
  margin: 5px 0px;
  width: auto; */
`;

//DIVIDER TEXT

export const DividerText = styled.h2`
  width: 70%;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

//CONTACT FORM

export const StyledInput = styled.input`
  display: block;
  margin-bottom: 20px;
  padding: 9px;
`;

export const StyledLabel = styled.label``;

export const StyledTextArea = styled.textarea`
  display: block;
  margin-bottom: 20px;
  padding: 9px;
  width: 500px;
  height: 100px;
`;

export const StyledContainer = styled.div``;

export const StyledForm = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//CAROUSEL
export const CarouselImage = styled.img``;

export const CarouselContainer = styled.div`
  width: 70%;
  /* max-height: 500px; */
  margin: auto;
  margin-top: 20px;
`;

// export const StyledCarousel = styled(NukaCarousel)`
//   width: 500px;
//   height: 300px;
// `;

//Amenities section

export const DetailsContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20px;
  display: flex;
`;

export const InfoColumn = styled.div`
  flex-basis: 80%;
  margin-left: 50px;
  flex-direction: column;
`;

export const FactColumn = styled.div`
  flex-direction: column;
  text-align: center;
`;

export const AmenitiesContainer = styled.div`
  border-top: 1px gray dashed;
  width: 100%;
  display: flex;
`;

export const Amenities = styled.div`
  padding: 5px;
`;

export const AmenitiesTitle = styled.p`
  padding-top: 10px;
  font-weight: bold;
  margin-right: 20px;
`;

export const AmenityItem = styled.p`
  display: inline-block;
  width: 50%;
  padding-bottom: 5px;
  padding-top: 5px;
`;

{
  /* <DetailsContainer>
      <NormalColumn />
      <InfoColumn>
        <Amenities />
      </InfoColumn>
    </DetailsContainer> */
}
