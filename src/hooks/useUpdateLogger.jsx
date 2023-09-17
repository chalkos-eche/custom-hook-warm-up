import { useEffect } from 'react';

// 변수가 변경될때 마다 console.log 찍어주는 커스텀 훅
export const useUpdateLogger = value => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return;
};
