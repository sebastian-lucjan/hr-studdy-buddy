import styles from 'styled-components';

// const calculateColor = (average) => {
//   let color = '';

//   if (average <= 3) {
//     color = 'error';
//   } else if (average >= 4) {
//     color = 'succes';
//   } else {
//     color = 'warning';
//   }

//   return color;
// };

export const Wrapper = styles.div`
  background-color: ${(props) => props.theme.colors[props.color(props.average)]};
`;
