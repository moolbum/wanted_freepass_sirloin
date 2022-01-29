import React, { useState } from 'react';
import Toggle from 'components/Toggle';

function DepartureDate() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <Toggle checked={toggle} onChange={handleToggle} />
    </div>
  );
}

export default DepartureDate;
