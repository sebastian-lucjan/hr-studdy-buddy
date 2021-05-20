import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate.styles';
import React from 'react';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import { NewsSection } from 'components/templates/NewsSection/NewsSection';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};
