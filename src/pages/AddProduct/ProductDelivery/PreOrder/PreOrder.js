import React, { useState } from 'react';
import Calendar from '../../../../components/Calendar';
import Toggle from '../../../../components/Toggle';

function ProductDelivery() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(isOn);
  };

  return (
    <div>
      <Toggle checked={isOn} onChange={handleToggle} />
      <Calendar />
      {/* <CalendarBasic /> */}
    </div>
  );
}

export default ProductDelivery;
