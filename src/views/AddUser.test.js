import '@testing-library/react'; // nie wiem czy potrzebna jest ta biblioteka
import React from 'react';
import AddUser from './AddUser';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

import { screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Add User', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Rom' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.3' } });

    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Rom');
  });
});
