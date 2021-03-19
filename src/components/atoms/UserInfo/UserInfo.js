import { Wrapper } from 'components/atoms/UserInfo/UserInfo.styles';

export const UserInfo = ({ userData }) => {
  const { name, attendance = '0%' } = userData;
  return (
    <Wrapper>
      <p className="user">{name}</p>
      <p className="attendance">attendance:{attendance}</p>
    </Wrapper>
  );
};
