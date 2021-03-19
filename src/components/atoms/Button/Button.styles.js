import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
