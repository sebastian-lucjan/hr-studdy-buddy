// import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserInfo } from 'components/atoms/UserInfo/UserInfo';
import { UserAverageSign } from 'components/atoms/UserAverageSign/UserAverageSign';

const UsersListItem = ({ index, userData: { name, average, attendance }, handleDeleteUser }) => {
  return (
    <Wrapper>
      <UserAverageSign average={average} />
      <UserInfo name={name} attendance={attendance} />
      <Button onClick={() => handleDeleteUser(name)} />
    </Wrapper>
  );
};

export default UsersListItem;
