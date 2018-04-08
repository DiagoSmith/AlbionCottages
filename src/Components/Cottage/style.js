import styled from "styled-components";

// for some reason `content: ""` is super important for the overlay...
export const HeroImage = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => `url(${props.imagePath})` };
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const HeroText = styled.h1`
  color: white;
  z-index: 10;
  font-size: 36px;
  padding: 50px;
`;

export const SubText = styled.p``;

export const DividerText = styled.p``;