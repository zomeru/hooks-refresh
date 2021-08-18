import React, { useRef } from 'react';

interface UseRefProps {}

const UseRef: React.FC<UseRefProps> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickk = () => {
    // will focus on input
    // inputRef.current!.focus();

    // will erase the input text
    inputRef.current!.value = '';
  };

  return (
    <div>
      <h1>Zomer</h1>
      <input type='text' placeholder='hey' ref={inputRef} />
      <button onClick={onClickk}>Change name</button>
    </div>
  );
};

export default UseRef;
