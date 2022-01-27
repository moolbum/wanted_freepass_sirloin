import React from 'react';
import Radio from '../../../utils/Radio/index';
import * as S from './SalesPeriod.style';
import { RADIO_EXPOSURE } from './data';

const SalesPeriod = () => {
  return (
    <div>
      <S.Text>2</S.Text>
      {RADIO_EXPOSURE.map(data => {
        return <Radio key={data.id} name={data.name} value={data.value} />;
      })}
    </div>
  );
};

export default SalesPeriod;
