// import React, { useContext } from 'react';
import React from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersLIst';
import { UsersContext } from 'providers/UsersProvider';
import { useContext } from 'react';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
