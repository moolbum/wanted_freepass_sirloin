import React from 'react';
import Input from 'components/Input';
import { PRODUCT_SELLING } from './data';
import Calendar from 'components/Calendar/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';
import { useCheckedDate } from 'hooks/useCheckedDate/useCheckedDate';

const Deadline = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  const [value, checkedDate] = useCheckedDate();

  return (
    <div>
      {PRODUCT_SELLING.map(data => {
        return (
          <Input
            key={data.id}
            type="radio"
            name={data.name}
            value={data.value}
            onChange={inputCheckedValue}
          />
        );
      })}
      <Calendar value={value} checkedDate={checkedDate} name="sale" />
    </div>
  );
};

export default React.memo(Deadline);
