import React from 'react';
import { screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import { NewsSection } from './NewsSection';
// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/react';

const mock = new MockAdapter(axios);

const query = `
  {
    allArticles {
      id
      title
      category
      content
      image {
        url
      }
    }
  }`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
