import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Title from 'components/atoms/Title/Title';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from 'components/organisms/StudentsList/StudentsList.styles';
import { UserShape } from 'types/index';
import { useStudents } from 'hooks/useStudents';

const titleText = 'Student list';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title text={titleText} />
      <StyledList>
        {students.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool,
  deleteUser: PropTypes.func,
};

export default StudentsList;
