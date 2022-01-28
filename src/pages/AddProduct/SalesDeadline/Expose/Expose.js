import React, { useState } from 'react';
import Radio from '../../../../components/Radio/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from '../../../../components/Calendar';
// import { useSalesRadio } from '../../../../utils/SalesRadio/SalesRadio';

const Expose = () => {
  const [radio, setRadio] = useState();

  const radioCheckedValue = e => {
    const { value, checked } = e.target;
    if (checked) {
      setRadio(value);
    }
  };

  console.log(radio);

  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
        return (
          <Radio
            key={data.id}
            name={data.name}
            value={data.value}
            onClick={radioCheckedValue}
          />
        );
      })}
      <Calendar />
    </div>
  );
};

export default Expose;
