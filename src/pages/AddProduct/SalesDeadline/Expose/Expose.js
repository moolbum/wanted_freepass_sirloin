import React from 'react';
import Input from 'components/Input/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from 'components/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';
import { useCheckedDate } from 'hooks/useCheckedDate/useCheckedDate';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  const [value, checkedDate] = useCheckedDate();
  console.log(radio);
  console.log('노출기한>>>>>', value);

  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
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
