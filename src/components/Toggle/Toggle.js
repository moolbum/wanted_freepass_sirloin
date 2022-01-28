import React, { useState } from 'react';
import * as S from './Toggle.style';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <S.ToggleWrapper>
      <S.ToggleInput
        id="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <S.ToggleLabel htmlFor="checkbox" />
    </S.ToggleWrapper>
  );
}

export default Toggle;
