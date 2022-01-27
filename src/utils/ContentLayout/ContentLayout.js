import React from 'react';
import * as S from './ContentLayout.style';

function ContentLayout({ title, subtitle, content }) {
  return (
    <S.Card>
      <S.CardInnerWrap>
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardInnerWrap>
      <S.CardContent>
        {subtitle && (
          <S.ContentTitleWrap>
            <S.ContentTitle>{subtitle}</S.ContentTitle>
          </S.ContentTitleWrap>
        )}
        <S.InnerContent>{content}</S.InnerContent>
      </S.CardContent>
    </S.Card>
  );
}

export default ContentLayout;
