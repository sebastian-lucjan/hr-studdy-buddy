import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import StudentsList from '../components/organisms/StudentsList/StudentsList';

import { useStudents } from 'hooks/useStudents';
import Title from 'components/atoms/Title/Title';
import { TitleWrapper } from './Dashboard.styles';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <ViewWrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <StudentsList />
    </ViewWrapper>
  );
};

export default Dashboard;
