import React, { useEffect, useLayoutEffect, useRef } from 'react';

interface UseLayoutEfectProps {}

const UseLayoutEfect: React.FC<UseLayoutEfectProps> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Will be immediate called BEFORE page renders
  useLayoutEffect(() => {
    // console.log('useLayoutEffect');
    console.log(inputRef.current?.value);
  }, []);

  // Will be called after everything is rendered to the page
  useEffect(() => {
    // console.log('useEffect');
    inputRef.current!.value = 'HELLO';
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text' name='' id='' value='ZOMER' />
    </div>
  );
};

export default UseLayoutEfect;
