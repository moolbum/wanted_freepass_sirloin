import React, { useState } from 'react';
import Calendar from 'components/Calendar';
import { CalendarBasic } from 'components/Calendar/Calendar';
import Toggle from 'components/Toggle';
import {
  useCheckedDate,
  useCheckedDateBasic,
} from 'hooks/useCheckedDate/useCheckedDate';
import * as S from './PreOrder.style';

function ProductDelivery() {
  const [value, checkedDate] = useCheckedDate();
  const [basicValue, CheckedDateBasic] = useCheckedDateBasic();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const spanStyle = {
    fontSize: '16px',
    padding: '30px',
  };

  return (
    <>
      <Toggle
        id="checkbox"
        type="checkbox"
        checked={toggle}
        onChange={handleToggle}
      />
      <div style={divStyle}>
        <span style={spanStyle}>주문 시간</span>
        <Calendar value={value} checkedDate={checkedDate} />
      </div>

      <div>
        <S.Text>새벽 배송</S.Text>
        <CalendarBasic value={basicValue} CheckedDateBasic={CheckedDateBasic} />
        <S.Text>일반 배송</S.Text>
        <CalendarBasic value={basicValue} CheckedDateBasic={CheckedDateBasic} />
      </div>
    </>
  );
}
export default ProductDelivery;
