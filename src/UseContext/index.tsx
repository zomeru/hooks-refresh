import React, { useState, createContext } from 'react';
import Login from '../components/Login';
import User from '../components/User';

interface ContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<ContextProps>({} as ContextProps);

interface UseContextProps {}

const UseContext: React.FC<UseContextProps> = ({}) => {
  const [username, setUsername] = useState<string>('');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {/* <Login setUsername={setUsername} />
      <User username={username} /> */}

      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContext;
