// import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledItem } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserInfo } from 'components/atoms/UserInfo/UserInfo';
import { UserAverageSign } from 'components/atoms/UserAverageSign/UserAverageSign';

const UsersListItem = ({ index, userData: { name, average, attendance }, handleDeleteUser }) => {
  return (
    <StyledItem>
      <UserAverageSign average={average} />
      <UserInfo name={name} attendance={attendance} />
      <DeleteButton onClick={() => handleDeleteUser(name)} />
    </StyledItem>
  );
};

export default UsersListItem;
