import React, { useState } from 'react';
import Toggle from '../../../../components/Toggle';

function DepartureDate() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <Toggle checked={isOn} onChange={handleToggle} />
    </div>
  );
}

export default DepartureDate;
