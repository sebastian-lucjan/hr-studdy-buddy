import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 14px 24px 14px 0px;
  /* width: 100%; */
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  /* background-color: red; */
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
`;
