import React, { useEffect } from 'react';

interface ChildProps {
  returnComment: (name: string) => string;
}

const Child: React.FC<ChildProps> = ({ returnComment }) => {
  useEffect(() => {
    console.log('FUNCTION WAS CALLED');
  }, [returnComment]);

  return <div>{returnComment('ZOMER')}</div>;
};

export default Child;
