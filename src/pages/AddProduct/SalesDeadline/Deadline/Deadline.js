import React from 'react';
import Radio from 'components/Radio';
import { PRODUCT_SELLING } from './data';
import Calendar from 'components/Calendar/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  console.log(radio);

  return (
    <div>
      {PRODUCT_SELLING.map(data => {
        return (
          <Radio
            key={data.id}
            name={data.name}
            value={data.value}
            onChange={inputCheckedValue}
          />
        );
      })}
      <Calendar />
    </div>
  );
};

export default Expose;
