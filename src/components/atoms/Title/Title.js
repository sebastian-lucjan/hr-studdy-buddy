import { StyledTitle } from 'components/atoms/Title/Title.styles';
import PropTypes from 'prop-types';

const Title = ({ text, children }) => {
  if (children) {
    return <StyledTitle>{children}</StyledTitle>;
  }
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
