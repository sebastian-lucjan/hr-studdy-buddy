import React from 'react';
import { StyledTitle } from 'views/AddUser.styles';
import { Wrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const Form = ({ handleAddUser, handleInputChange, formValues: { name, attendance, average } }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};
Form.propTypes = {
  handleAddUser: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default Form;
