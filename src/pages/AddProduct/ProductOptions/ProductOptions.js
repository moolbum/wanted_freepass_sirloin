import React, { useState } from 'react';
import * as S from './ProductOptions.style';
import ProductOptionsButton from './ProductOptionsButton/ProductOptionsButton';
import LayoutOutter from './LayoutOutter/LayoutOutter';

function ProductOptions({ countList, setCountList }) {
  return (
    <S.ProductOptions>
      <S.OptionsWrapper>
        {!!countList.length ? (
          ''
        ) : (
          <S.OptionsContent>
            옵션세트를 추가하여 옵션을 구성해주세요
          </S.OptionsContent>
        )}
        <LayoutOutter countList={countList} />
      </S.OptionsWrapper>
    </S.ProductOptions>
  );
}

export default ProductOptions;
