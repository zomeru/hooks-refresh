import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

interface UseMemoProps {}

const UseMemo: React.FC<UseMemoProps> = ({}) => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments: any) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    // Will be logged every time any state is changed
    console.log('THIS WAS COMPUTED');

    return longestName;
  };

  // Makes sure will only re-render when DATA is changed
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  console.log('TOGGLE', toggle);

  // console.log('DATA', data);

  return (
    <div>
      <div>{getLongestName}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default UseMemo;
