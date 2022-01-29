import React, { useState } from 'react';
import * as S from './ProductName.style';

const ProductName = () => {
  const [product, setProduct] = useState('');

  const handleInput = e => {
    // const value = nameRef.current.value;

    const userInput = e.target.value;
    setProduct(userInput);
    // nameRef.current = userInput;
    // setInputValue(userInput);
    console.log(userInput);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name="dd"
        value={product}
        onChange={handleInput}
        // ref={nameRef}
        placeholder="상품명을 입력해주세요"
      />
    </S.Wrapper>
  );
};

export default ProductName;
