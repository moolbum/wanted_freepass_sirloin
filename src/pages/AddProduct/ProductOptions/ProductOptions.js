import React, { useState } from 'react';
import * as S from './ProductOptions.style';
import ProductOptionsButton from './ProductOptionsButton/ProductOptionsButton';
import LayoutOutter from './LayoutOutter/LayoutOutter';

function ProductOptions({ countList, setCountList }) {
  // const [countList, setCountList] = useState([]);

  // const onAddDetailDiv = () => {
  //   let countArr = [...countList];
  //   let counter = Number(countArr.slice(-1));
  //   counter += 1;
  //   // console.log(typeof counter);
  //   countArr.push(counter);
  //   setCountList(countArr);
  //   console.log(countArr);
  //   console.log(counter);
  // };

  // const onRemove = counter => {
  //   setCountList(countList.filter(countList => countList.counter !== counter));
  // };
  return (
    <S.ProductOptions>
      <S.OptionsWrapper>
        {/* <ProductOptionsButton borderColor="#e33e38" color="#e33e38">
          삭제
        </ProductOptionsButton> */}
        {!!countList.length ? (
          ''
        ) : (
          <S.OptionsContent>
            옵션세트를 추가하여 옵션을 구성해주세요
          </S.OptionsContent>
        )}

        {/* <button type="submit">추가</button> */}
        <LayoutOutter countList={countList} />
      </S.OptionsWrapper>
    </S.ProductOptions>
  );
}

export default ProductOptions;
