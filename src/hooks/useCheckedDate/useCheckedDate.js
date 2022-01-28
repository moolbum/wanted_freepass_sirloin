import { useState } from 'react';

export const useCheckedDate = () => {
  const [value, setValue] = useState([null, null]);

  const checkedDate = newValue => {
    setValue(newValue);
  };

  return [value, checkedDate];
};
