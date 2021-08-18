import React, { useContext } from 'react';
import { AppContext } from '../UseContext';

interface UserProps {
  // username: string;
}

const User: React.FC<UserProps> = ({}) => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

export default User;
