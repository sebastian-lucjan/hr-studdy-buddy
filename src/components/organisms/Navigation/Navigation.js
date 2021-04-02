import { StyledNav } from 'components/organisms/Navigation/Navigation.styles';
import { Logo } from 'components/atoms/Logo/Logo.styles';
import { StyledLink } from 'components/molecules/StyledLink/StyledLink.styles';

export const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>Study</h1>
        <h1>Buddy</h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </StyledNav>
  );
};
