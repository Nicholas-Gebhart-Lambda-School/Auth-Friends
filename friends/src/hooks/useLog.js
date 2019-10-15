import { useEffect } from 'react';

export const useLog = (hook, message = '') => {
  const result = hook();
  useEffect(() => {
    console.log(`${message}: ${result}`);
  });
  return result;
};
