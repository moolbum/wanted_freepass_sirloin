import React, { useState } from 'react';
import Calendar from 'components/Calendar';
import { CalendarBasic } from 'components/Calendar/Calendar';
import Toggle from 'components/Toggle';
import {
  useCheckedDate,
  useCheckedDateBasic,
} from 'hooks/useCheckedDate/useCheckedDate';

function ProductDelivery() {
  const [value, checkedDate] = useCheckedDate();
  const [basicValue, CheckedDateBasic] = useCheckedDateBasic();
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(isOn);
  };

  return (
    <div>
      <Toggle checked={isOn} onChange={handleToggle} />
      <Calendar value={value} checkedDate={checkedDate} />
      <CalendarBasic value={basicValue} CheckedDateBasic={CheckedDateBasic} />
    </div>
  );
}

export default ProductDelivery;
