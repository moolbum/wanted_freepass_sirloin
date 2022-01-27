import React from 'react';
import Radio from '../../../../utils/Radio/index';
// import * as S from './Expose.style';
import { PRODUCT_EXPOSE } from './data';
import Calender from '../../../../utils/Calender/index';

const Expose = () => {
  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
      <Calender />
    </div>
  );
};

export default Expose;
