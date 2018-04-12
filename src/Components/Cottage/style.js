import styled from "styled-components";

export const HeroImage = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  background-image: ${props => `linear-gradient(
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.7)
      ), url(${props.imagePath})` };
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroText = styled.h1`
  color: white;
  z-index: 10;
  font-size: 42px;
  margin-left: 50px;
  width: auto;
`;

export const SubText = styled.p`
  z-index: 10;
  color: white;
  text-transform: uppercase;
  font-size: 25px;
  padding-left:50px;
  margin: 5px 0px;
  width: auto;
`;

export const DividerText = styled.p``;