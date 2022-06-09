import React from 'react';
import { useStore } from '../src/store/store';
function Test() {
  const { count, increaseCount, setThree } = useStore();

  return (
    <div>
      <div>Zustand ! {count}</div>
      <button onClick={increaseCount}>+1</button>
      <button onClick={() => setThree(3)}>set3</button>
    </div>
  );
}

export default Test;
