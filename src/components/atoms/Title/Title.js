import { StyledTitle } from 'components/atoms/Title/Title.styles';
import PropTypes from 'prop-types';

const Title = (props) => {
  return <StyledTitle>{props.text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
