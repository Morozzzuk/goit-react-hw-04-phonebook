import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    //^ записуємо у локал сторедж те що користувач вписує , якщо нічого не має то буде значення по дефолту
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  //^ якщо користувач щось вписував то ми відображаємо йому це з локал сторедж
  return [state, setState];
}
