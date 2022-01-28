import React from 'react';
import Radio from '../../../../components/Radio/index';
import { PRODUCT_EXPOSE } from './data';
import Calendar from '../../../../components/Calendar';

const Expose = () => {
  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
      <Calendar />
    </div>
  );
};

export default Expose;
