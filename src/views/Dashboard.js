// import React, { useContext } from 'react';
import React from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersLIst';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
