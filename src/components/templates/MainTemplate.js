import React from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate.styles';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
