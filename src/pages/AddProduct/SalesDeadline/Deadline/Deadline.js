import React from 'react';
import Radio from '../../../../utils/Radio';
import { PRODUCT_SELLING } from './data';
import Calendar from '../../../../utils/Calendar/Calendar';

const Expose = () => {
  return (
    <div>
      {PRODUCT_SELLING.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
      <Calendar />
    </div>
  );
};

export default Expose;
