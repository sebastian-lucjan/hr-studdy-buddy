import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import { MainTemplate } from 'components/templates/MainTemplate';

import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import React from 'react';
import UsersProvider from 'providers/UsersProviders';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
