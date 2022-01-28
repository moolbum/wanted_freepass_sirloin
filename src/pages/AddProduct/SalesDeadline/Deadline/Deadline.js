import React from 'react';
import Radio from 'components/Radio';
import { PRODUCT_SELLING } from './data';
import Calendar from 'components/Calendar/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';
import { useCheckedDate } from 'hooks/useCheckedDate/useCheckedDate';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  const [value, checkedDate] = useCheckedDate();
  console.log(radio);
  console.log('판매기한>>>>>', value);

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
      <Calendar value={value} checkedDate={checkedDate} />
    </div>
  );
};

export default Expose;
