import styles from 'styled-components';

export const Wrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.darkGray};

    p.user {
      display: block;
      margin: 0px;
      font-weight: bold;
    }
    p.attendance {
      display: block;
      margin: 0px;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
`;
