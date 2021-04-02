import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledTitle, StyledList } from 'components/organisms/UsersList/UsersList.styles';
import PropTypes from 'prop-types';
import { UserShape } from 'types/index';

const UsersList = ({ users, handleDeleteUser, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <StyledTitle>Student list</StyledTitle>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem handleDeleteUser={handleDeleteUser} index={i} userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDeleteUser: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UsersList;
