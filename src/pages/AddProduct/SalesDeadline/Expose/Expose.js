import React from 'react';
import Radio from 'components/Radio/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from 'components/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  console.log(radio);

  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
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
