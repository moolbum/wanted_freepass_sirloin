import React from 'react';
import Radio from 'components/Radio/index';
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

export default React.memo(Expose);
