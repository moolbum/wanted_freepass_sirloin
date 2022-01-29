import React, { useState } from 'react';
import Toggle from 'components/Toggle';

function ProductBenefit() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <Toggle checked={toggle} onChange={handleToggle} />
    </div>
  );
}

export default ProductBenefit;
