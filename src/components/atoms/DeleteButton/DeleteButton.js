// import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';
import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProviders';

const Button = ({ name }) => {
  const { handleDeleteUser } = useContext(UsersContext);

  return (
    <StyledButton onClick={() => handleDeleteUser(name)}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
