import React from 'react';
import { useStore } from '../../store/store';

const NumOfMatching = () => {
  const { count, setThree } = useStore();

  return (
    <div>
      <div>현재매칭: {count}개</div>
      <button onClick={() => setThree(0)}>초기화</button>
    </div>
  );
};

export default NumOfMatching;