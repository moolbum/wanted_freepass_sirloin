import React, { useState } from 'react';
import * as S from './ProductInfo.style';

const ProductInfo = () => {
  const [inputInfo, setInputInfo] = useState('');

  const handleInput = e => {
    const userInput = e.target.value;
    setInputInfo(userInput);
  };
  console.log('inputInfo', inputInfo);

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name={inputInfo}
        value={inputInfo}
        onChange={handleInput}
        placeholder="상품 구성 소개 정보를 입력해주세요"
      />
    </S.Wrapper>
  );
};

export default ProductInfo;
