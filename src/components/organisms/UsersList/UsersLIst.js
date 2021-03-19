import users from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem index={i} userData={userData} key={userData.id} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
