import { Wrapper } from 'components/atoms/UserAverageSign/UserAverageSign.styles';

export const UserAverageSign = ({ average }) => {
  const calculateColor = (average) => {
    let color = '';

    if (average <= 3) {
      color = 'error';
    } else if (average >= 4) {
      color = 'success';
    } else {
      color = 'warning';
    }

    return color;
  };

  return (
    <Wrapper calculateColor={calculateColor} average={average}>
      {average}
    </Wrapper>
  );
};
