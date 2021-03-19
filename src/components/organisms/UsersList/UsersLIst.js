import { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles';

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

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setloadingState] = useState([]);

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
    <Wrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Users List</h1>
          <ul>
            {users.map((userData, i) => (
              <UsersListItem handleDeleteUser={handleDeleteUser} index={i} userData={userData} key={userData.name} />
            ))}
          </ul>
        </>
      )}
    </Wrapper>
  );
};
// class UsersList extends Component {
//   state = {
//     users: [],
//     isLoaded: false,
//   };

//   handleDeleteUser = (name) => {
//     const filtratedUser = this.state.users.filter((user) => user.name !== name);
//     this.setState({ users: filtratedUser });
//   };

//   componentDidMount() {
//     mockAPI()
//       .then((data) => {
//         console.log(data);
//         this.setState({ users: data, isLoaded: true });
//       })
//       .catch((err) => console.log(err.message));
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.isLoaded !== this.state.isLoaded) {
//       console.log('Loading state has changed');
//     }
//   }

//   render() {
//     return (
//       <Wrapper>
//         {this.state.isLoaded ? (
//           <ul>
//             {this.state.users.map((userData, i) => (
//               <UsersListItem handleDeleteUser={this.handleDeleteUser} index={i} userData={userData} key={userData.id} />
//             ))}
//           </ul>
//         ) : (
//           <h1>Loading...</h1>
//         )}
//       </Wrapper>
//     );
//   }
// }
export default UsersList;
