import React, { useRef } from 'react';
import Button from '../components/Button';

interface UseImperativeHandleProps {}

const UseImperativeHandle: React.FC<UseImperativeHandleProps> = ({}) => {
  const buttonRef = useRef<any>(null);

  // Parent will have the state of child
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current!.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
