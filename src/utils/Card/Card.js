import React from 'react';
import * as S from './Card.style';

function Card() {
  return (
    <S.Card>
      <S.CardInnerWrap>
        <S.CardTitle>상품 타이틀</S.CardTitle>
      </S.CardInnerWrap>
      <S.CardContent>
        <S.ContentTitleWrap>
          <S.ContentTitle>상품 노출 기한</S.ContentTitle>
        </S.ContentTitleWrap>
        <S.InnerContent>내용</S.InnerContent>
      </S.CardContent>
    </S.Card>
  );
}

export default Card;
