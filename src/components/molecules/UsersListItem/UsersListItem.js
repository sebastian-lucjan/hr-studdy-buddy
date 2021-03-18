// import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserInfo } from 'components/atoms/UserInfo/UserInfo';
import { UserAverageSign } from 'components/atoms/UserAverageSign/UserAverageSign';

const UsersListItem = ({ userData }) => {
  return (
    <Wrapper>
      <UserAverageSign average={userData.average} />
      <UserInfo userData={userData} />
      <Button />
    </Wrapper>
  );
};

export default UsersListItem;
