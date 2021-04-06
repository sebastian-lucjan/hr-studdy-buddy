import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';

const mockAPI = () => {
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

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleDeleteUser: () => {},
  isLoading: true,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setloadingState] = useState(true);

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
  };

  const handleDeleteUser = (name) => {
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

  return (
    <UsersContext.Provider value={{ users: users, handleAddUser: handleAddUser, handleDeleteUser: handleDeleteUser, isLoading }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
