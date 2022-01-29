import React, { useState } from 'react';
import * as S from './ProductImgs.style';

const ProductImgs = () => {
  //   const [imgs, setImgs] = useState('');

  const setThumbnail = event => {
    // reader.onload = event => {
    //   img;
    // };
    console.log('이거야 ㅇ!!!!!!', event.target);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="file"
        name="imgs"
        // value={imgs}
        onChange={setThumbnail}
        placeholder="+ 이미지 첨부"
        accept="image/*"
      />
      <S.ImgWrapper>'imgs'</S.ImgWrapper>
    </S.Wrapper>
  );
};

export default ProductImgs;
