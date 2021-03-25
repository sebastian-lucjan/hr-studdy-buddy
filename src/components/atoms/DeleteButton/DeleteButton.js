// import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
