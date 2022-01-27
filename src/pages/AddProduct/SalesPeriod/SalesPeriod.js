import React from 'react';
import Radio from '../../../utils/Radio/index';
import * as S from './SalesPeriod.style';
import { PRODUCT_EXPOSE, PRODUCT_SELLING } from './data';

const SalesPeriod = () => {
  return (
    <div>
      {PRODUCT_EXPOSE.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
      {PRODUCT_SELLING.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
    </div>
  );
};

export default SalesPeriod;
