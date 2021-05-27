import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 3px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: 1px solid ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResult = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #aaa; //to del
  height: 200px; //to del
  max-height: 400px;
  overflow: scroll;

  li {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 20px 5px;
  }
`;
