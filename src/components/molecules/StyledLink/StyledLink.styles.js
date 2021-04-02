import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  margin: 14px 24px 14px 0px;
  /* width: 100%; */
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  /* background-color: red; */
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  color: ${({ theme }) => theme.colors.darkGray};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    transition: 0.2s;
    opacity: 0;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    /* right: -20px; */
    /* background-color: ${({ theme }) => theme.colors.black}; */
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
