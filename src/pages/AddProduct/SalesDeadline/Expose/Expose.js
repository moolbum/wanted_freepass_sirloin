import React from 'react';
import Radio from '../../../../utils/Radio/index';
// import * as S from './Expose.style';
import { PRODUCT_EXPOSE } from './data';
import Calendar from '../../../../utils/Calendar';

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
