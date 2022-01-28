import { useState } from 'react';

export const useSalesRadio = e => {
  const [radio, setRadio] = useState();

  const radioCheckedValue = e => {
    const { value, checked } = e.target;
    if (checked) {
      setRadio(value);
    }
  };
  return radio;
};
