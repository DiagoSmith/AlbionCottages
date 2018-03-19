import styled from "styled-components";

export const HomeContainer = styled.div``;
export const Hero = styled.div`
  max-height: 600px;
  overflow: hidden;
`;
export const StyledImage = styled.img`
  width: 100%;
  ::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;
