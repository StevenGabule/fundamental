import { FC, useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 22 },
];

const UserSearch: FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleOnClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <>
      <h3>User Research</h3>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleOnClick} type='button'>
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
};

export default UserSearch;
