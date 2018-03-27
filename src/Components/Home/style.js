import styled from "styled-components";
import homeImage from "../../Assets/Images/homeImage.jpg";

export const HomeContainer = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
`;

// for some reason `content: ""` is super important for the overlay...
export const Hero = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${homeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const HeroText = styled.h1`
  color: white;
  z-index: 10;
  font-size: 36px;
`;
