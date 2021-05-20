import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { MainTemplate } from 'components/templates/MainTemplate';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import { Wrapper } from './Root.styles';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/group" />
              </Route>
              <Route path="/group/:id?" exact>
                <Dashboard />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
