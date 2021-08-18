import React, { useState, useReducer } from 'react';

interface ReducerState {
  count: number;
  showText: boolean;
}

type INCREMENT = 'INCREMENT';
type TOGGLE = 'toggleShowText';

type ActionType = {
  type: INCREMENT | TOGGLE;
};

const reducer = (state: ReducerState, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

interface UseReducerProps {}

const UseReducer: React.FC<UseReducerProps> = ({}) => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>useReducer</h1>
      {/* <h2>{count}</h2> */}
      <h2>{state.count}</h2>
      {/* <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click here
      </button> */}
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click here
      </button>
      {/* {showText && <p>Show text if count is even</p>} */}
      {state.showText && <p>Show text if count is even</p>}
    </div>
  );
};

export default UseReducer;
