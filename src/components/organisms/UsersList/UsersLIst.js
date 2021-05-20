import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title/Title';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import { UserShape } from 'types/index';

const titleText = 'Student list';

const UsersList = ({ users = [], isLoading }) => {
  return (
    <>
      <Title text={titleText} />
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool,
  deleteUser: PropTypes.func,
};

export default UsersList;
