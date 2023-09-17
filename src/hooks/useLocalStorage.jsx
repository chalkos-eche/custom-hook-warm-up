import { useState, useEffect } from 'react';

//
//
////  getSavedValue는 useLocalStorage이 렌더시, 초기값을 잡아주는 함수
//
//
function getSavedValue(key, initialValue) {
  // key값을 받았을때 key가 있으면 있는값 반환
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  // 없으면 진행
  // 초기값이 함수일경우 함수 반환값을 초기값으로 설정
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

// localstorage 의 이름(키) : 내용(벨류)
export const useLocalStorage = (key, initialValue) => {
  // Lazy Initialization  용법
  // useState에서 직접적인 값 대신 함수로 넘기면 오직 state가 처음 만들어질때 실행된다(다시 렌더링되면 실행은 무시됨)
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
