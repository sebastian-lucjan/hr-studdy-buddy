import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from 'components/templates/NewsSection/NewsSection.styles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  console.log(process.env.REACT_APP_DATOCMS_TOKEN);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
      allArticles {
        id
        title
        category
        content
        image {
          url
        }
      }
     }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};
