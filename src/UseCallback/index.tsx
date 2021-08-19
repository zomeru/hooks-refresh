import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Child from '../components/Child';

interface UseCallbackProps {}

const UseCallback: React.FC<UseCallbackProps> = ({}) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState<string>('Hello world!');

  const returnComment = useCallback(
    (name: string) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default UseCallback;
