import UsersList from 'components/organisms/UsersList/UsersLIst';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

import { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mockAPI = (succes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setloadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  const handleDeleteUser = (name) => {
    console.log('handleDeleteUser');
    const filtratedUser = users.filter((user) => user.name !== name);
    setUsers(filtratedUser);
  };

  useEffect(() => {
    setloadingState(true);

    mockAPI()
      .then((data) => {
        setloadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err.message));

    return () => console.log('unmount'); // uruchamianie po usunięciu
  }, []);

  useEffect(() => {
    console.log('isLoading has changed');
  }, [isLoading]);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  // const UsersList = ({ users, handleDeleteUser, isLoading }) => {
  // { handleAddUser, handleInputChange, formValues: { name, attendance, average } }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList handleDeleteUser={handleDeleteUser} isLoading={isLoading} users={users} />
            </Route>
            <Route path="/add-user">
              <Form handleAddUser={handleAddUser} handleInputChange={handleInputChange} formValues={formValues} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
