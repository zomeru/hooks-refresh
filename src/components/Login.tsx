import React, { useContext } from 'react';
import { AppContext } from '../UseContext';

interface LoginProps {
  // setUsername: (str: string) => void;
}

const Login: React.FC<LoginProps> = ({}) => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        type='text'
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
