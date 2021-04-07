import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledItem } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserInfo } from 'components/atoms/UserInfo/UserInfo';
import { UserAverageSign } from 'components/atoms/UserAverageSign/UserAverageSign';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <StyledItem>
      <UserAverageSign average={average} />
      <UserInfo name={name} attendance={attendance} />
      <DeleteButton name={name} />
    </StyledItem>
  );
};

export default UsersListItem;
