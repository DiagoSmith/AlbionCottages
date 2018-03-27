import styled from "styled-components";

export const NavWrapper = styled.div`
  
`;

export const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  flex-wrap: wrap;
  position: relative;
  z-index: 1000;
`;

export const StyledItem = styled.li`
  flex: 1;
  font-size: 20px;
  padding: 10px 10px 10px 10px;
  color: ${props => props.isHome ? 'white':'black'};
`;

export const Icon = styled.svg``;

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: ${props => props.primary ? 'blue' : 'purple'};
// `;
// <Title primary>Hello World</Title> // will be blue
