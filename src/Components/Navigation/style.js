import styled from "styled-components";

export const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  flex-wrap: wrap;
  flex-basis: 100%;
`;

export const StyledItem = styled.li`
  flex: 1;
  font-size: 20px;
  color: orange;
  padding: 10px 10px 10px 10px;
`;

export const Icon = styled.svg``;

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: ${props => props.primary ? 'blue' : 'purple'};
// `;
// <Title primary>Hello World</Title> // will be blue
