import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledTitle, StyledList } from 'components/organisms/UsersList/UsersList.styles';

// import { GlobalStyle } from 'assets/styles/globalStyles';

const UsersList = ({ users, handleDeleteUser, isLoading }) => {
  return (
    <>
      <Wrapper>
        {isLoading ? (
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
        )}
      </Wrapper>
    </>
  );
};

export default UsersList;
