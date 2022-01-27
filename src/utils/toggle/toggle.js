import React, { useState } from 'react';
import * as S from './Toggle.style';
const Toggle = ({
  left,
  right,
  leftColor,
  leftBgColor,
  rightBgColor,
  circleColor,
  setChecked,
}) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = e => {
    setToggled(e.target.value);
  };

  return (
    <S.ToggleWrapper>
      <S.CheckBox
        left={left}
        right={right}
        leftColor={leftColor}
        leftBgColor={leftBgColor}
        rightBgColor={rightBgColor}
        circleColor={circleColor}
        setChecked={setChecked}
        onChage={handleToggle}
        type="checkbox"
      />
    </S.ToggleWrapper>
  );
};

export default Toggle;
