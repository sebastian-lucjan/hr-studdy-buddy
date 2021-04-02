// import React, { useContext } from 'react';
import React from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersLIst';
// import { UsersContext } from 'providers/UsersProvider';

const Dashboard = (props) => {
  // const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList handleDeleteUser={props.handleDeleteUser} isLoading={props.isLoading} users={props.users} />
    </ViewWrapper>
  );
};

export default Dashboard;
