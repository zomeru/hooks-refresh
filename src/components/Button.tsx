import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref: React.ForwardedRef<unknown>) => {
  const [toggle, setToggle] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>Button from child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
