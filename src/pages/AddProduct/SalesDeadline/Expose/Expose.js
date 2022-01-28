import React from 'react';
import Input from '../../../../components/Input/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from '../../../../components/Calendar';

const Expose = () => {
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
      <Calendar />
    </div>
  );
};

export default Expose;
