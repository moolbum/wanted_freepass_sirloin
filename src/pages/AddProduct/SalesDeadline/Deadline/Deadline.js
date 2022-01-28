import React from 'react';
import Input from '../../../../components/Input';
import { PRODUCT_SELLING } from './data';
import Calendar from '../../../../components/Calendar/Calendar';

const Expose = () => {
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
      <Calendar />
    </div>
  );
};

export default Expose;
