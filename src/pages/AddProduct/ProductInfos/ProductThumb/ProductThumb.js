import React from 'react';
import * as S from './ProductThumb.style';

const ProductThumb = () => {
  //   const [thumbNail, setThumbNail] = useState('');

  const setThumbnail = event => {
    console.log('이거야 ㅇ!!!!!!', event.target);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="file"
        name="thumbNail"
        // value={thumbNail}
        onChange={setThumbnail}
        placeholder="+ 이미지 첨부"
        accept="image/*"
      />
      <S.ImgWrapper>'dd'</S.ImgWrapper>
    </S.Wrapper>
  );
};

export default ProductThumb;
