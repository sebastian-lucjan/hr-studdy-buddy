import styles from 'styled-components';

export const Wrapper = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50px;
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors[props.calculateColor(props.average)]};
  color: ${(props) => props.theme.colors.white};
`;
