import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 4px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
`;
// export const theme = {
//   colors: {
//     white: '#FFFFFF',
//     lightGray: '#DDDDDD',
//     grey: '#C0C7D6',
//     darkGray: '#737C8E',
//     black: '#111111',
//     success: '#8FCB81',
//     error: '#CB8581',
//     warning: '#E1D888',
//     darkPurple: '#C0C7D6',
//     lightPurple: '#ECEFF7',
//   },
//   fontSize: {
//     xl: '24px',
//     l: '17px',
//     m: '12px',
//     s: '11px',
//   },
// };
