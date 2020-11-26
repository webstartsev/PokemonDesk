import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearInterval(timeoutId);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
