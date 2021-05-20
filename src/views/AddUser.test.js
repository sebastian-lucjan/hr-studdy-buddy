import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react'; // nie wiem czy potrzebna jest ta biblioteka
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add User', () => {
  it('Adds user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Rom' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.3' } });
    fireEvent.click(screen.getByTestId('Consent'));

    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Rom');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Roma' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3.3' } });
    // fireEvent.click(screen.getByTestId('Consent'));

    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Roma');
    expect(newUser).not.toBeInTheDocument();
  });
});
