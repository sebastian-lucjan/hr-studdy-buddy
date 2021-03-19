import { Wrapper } from 'components/atoms/UserInfo/UserInfo.styles';

export const UserInfo = ({ name, attendance = '0%' }) => {
  return (
    <Wrapper>
      <p className="user">{name}</p>
      <p className="attendance">attendance:{attendance}</p>
    </Wrapper>
  );
};
