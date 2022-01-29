import React, { useState } from 'react';
import * as S from './FilterTag.style';

const FilterTag = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    const userInput = e.target.value;
    setInputValue(userInput);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name={inputValue}
        value={inputValue}
        onChange={handleInput}
        placeholder="필터 태그를 검색해주세요"
      />
      <S.Button>검색</S.Button>
    </S.Wrapper>
  );
};

export default FilterTag;
