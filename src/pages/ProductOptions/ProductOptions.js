import React from 'react';
import * as S from './ProductOptions.style';
import ProductOptionsButton from './ProductOptionsButton/ProductOptionsButton';

function ProductOptions() {
  return (
    <S.ProductOptions>
      <S.OptionsWrapper>
        {/* <ProductOptionsButton borderColor="#e33e38" color="#e33e38">
          삭제
        </ProductOptionsButton> */}
        <S.OptionsContent>
          옵션세트를 추가하여 옵션을 구성해주세요
        </S.OptionsContent>
      </S.OptionsWrapper>
    </S.ProductOptions>
  );
}

export default ProductOptions;
