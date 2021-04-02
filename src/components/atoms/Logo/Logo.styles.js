import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  & h1 {
    width: 100%;
    text-align: right;
    line-height: 1.2rem;
    margin: 0;
    font-weight: 700;
    margin-right: 1rem;
    /* display: box; */
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.logo};
  }
`;
// - właściwości kontenera:
//     - display: flex;
//     - flex-direction: row; // column, row-reverse, column-reverse
//     - flex-wrap: nowrap; // wrap, wrap-reverse
//     - flex-flow: row nowrap; // skrócona wersja flex-direction + flex-wrap;
//     - justify-content: flex-start; //flex-end, center, space-around, space-between, space-evenly - **zgodnie z osią**
//     - align-items: stretch; // flex-start, flex-end, center, baseline - **oś prostopadła**
//     - align-content: stretch; // flex-start, flex-end, center, space-around, space-between - **zachowanie poszczególnych wierszy**
// - właściwości elementu:
//     - order: 0; // liczba całkowita
//     - flex-grow: 0; // wartość bezwzględna od 0 w górę
//     - flex-shrink: 1; // wartość bezwzględna od 0 w górę
//     - flex-basis: auto // wielkość z różnymi jednostkami - **długość osi głównej**
//     - flex: 0 1 auto; // skrót dla flex-grow, flex-shrink i flex-basis
//     - align-self: auto;  // stretch ,flex-start, flex-end, center, baseline - jak align-items ale dla jednego elementu
