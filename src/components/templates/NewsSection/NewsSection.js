import React from 'react';
import { Wrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper } from 'components/templates/NewsSection/NewsSection.styles';

import { Button } from 'components/atoms/Button/Button';

export const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>News #1 - AWS</h3>
          <p>tech news</p>
        </TitleWrapper>
        <p>dolor sitr amet</p>
        <Button isBig> click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};
