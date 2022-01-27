import React from 'react';
import Radio from '../../../../utils/Radio';
// import * as S from './Expose.style';
import { PRODUCT_SELLING } from './data';
import Calender from '../../../../utils/Calender';

const Expose = () => {
  return (
    <div>
      {PRODUCT_SELLING.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
      <Calender />
    </div>
  );
};

export default Expose;
