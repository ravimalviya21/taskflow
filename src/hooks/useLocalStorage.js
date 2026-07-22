import { useCallback } from 'react';

export const useLocalStorage = (key) => {
  const getItem = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : undefined;
    } catch {
      return undefined;
    }
  }, [key]);

  const setItem = useCallback(
    (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        return;
      }
    },
    [key],
  );

  const removeItem = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      return;
    }
  }, [key]);

  return { getItem, setItem, removeItem };
};

export default useLocalStorage;
