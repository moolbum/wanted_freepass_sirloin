import { useState } from 'react';

export const useInputChecked = () => {
  const [radio, setRadio] = useState();

  const inputCheckedValue = e => {
    const { value, checked } = e.target;
    checked && setRadio(value);
  };
  return [radio, inputCheckedValue];
};
