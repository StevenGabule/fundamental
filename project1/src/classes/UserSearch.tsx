import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleOnClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <>
        <h3>User Research</h3>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleOnClick} type='button'>
          Find user
        </button>
        {user && (
          <>
            <p>Name: {user.name}</p>
            <p>age: {user.age}</p>
          </>
        )}
      </>
    );
  }
}

export default UserSearch;
