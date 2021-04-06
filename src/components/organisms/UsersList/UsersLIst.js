import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
// import PropTypes from 'prop-types';
// import { UserShape } from 'types/index';
import Title from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProviders';
import { useContext } from 'react';

const titleText = 'Student list';

const UsersList = () => {
  const { isLoading, users } = useContext(UsersContext);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
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

// UsersList.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
//   handleDeleteUser: PropTypes.func,
//   isLoading: PropTypes.bool,
// };

export default UsersList;
