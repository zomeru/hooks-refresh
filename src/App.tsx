import React from 'react';
import './App.css';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';
import UseImperativeHandle from './UseImperativeHandle';
import UseContext from './UseContext';

function App() {
  return (
    <div className='App'>
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandle /> */}
      <UseContext />
    </div>
  );
}

export default App;
