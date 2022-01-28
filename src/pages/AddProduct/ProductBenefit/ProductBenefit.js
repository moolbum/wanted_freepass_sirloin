import React, { useState } from 'react';
import Toggle from '../../../components/Toggle';

function ProductBenefit() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(isOn);
  };

  return (
    <div>
      <Toggle checked={isOn} onChange={handleToggle} />
    </div>
  );
}

export default ProductBenefit;
