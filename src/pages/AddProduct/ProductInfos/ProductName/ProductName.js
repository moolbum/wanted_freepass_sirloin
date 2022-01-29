import React, { useState } from 'react';
import * as S from './ProductName.style';

const ProductName = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    const userInput = e.target.value;
    setInputValue(userInput);
  };
  console.log(inputValue);

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name={inputValue}
        value={inputValue}
        onChange={handleInput}
        placeholder="상품명을 입력해주세요"
      />
    </S.Wrapper>
  );
};

export default ProductName;
