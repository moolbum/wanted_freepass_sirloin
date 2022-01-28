import React from 'react';
import Input from 'components/Input';
import { PRODUCT_SELLING } from './data';
import Calendar from 'components/Calendar/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';
import { useCheckedDate } from 'hooks/useCheckedDate/useCheckedDate';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  const [value, checkedDate] = useCheckedDate();

  console.log('판매기한>>>>>', value);
  console.log(radio);

  return (
    <div>
      {PRODUCT_SELLING.map(data => {
        return (
          <Input
            key={data.id}
            type="radio"
            name={data.name}
            value={data.value}
          />
        );
      })}
      <Calendar value={value} checkedDate={checkedDate} />
    </div>
  );
};

export default React.memo(Expose);
