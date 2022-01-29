import React from 'react';
import Input from 'components/Input/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from 'components/Calendar';
import { useInputChecked } from 'hooks/useInputChecked/useInputChecked';
import { useCheckedDate } from 'hooks/useCheckedDate/useCheckedDate';
import { useSetData } from 'hooks/useSetData/useSetData';

const Expose = () => {
  const [radio, inputCheckedValue] = useInputChecked();
  const [value, checkedDate] = useCheckedDate();
  const submitData = useSetData();

  console.log('value', value);
  console.log(typeof submitData, submitData);

  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
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
      <Calendar value={value} checkedDate={checkedDate} />
    </div>
  );
};

export default React.memo(Expose);
