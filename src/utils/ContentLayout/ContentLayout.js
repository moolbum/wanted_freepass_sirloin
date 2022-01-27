import React from 'react';
import * as S from './ContentLayout.style';
import ProductOptionsButton from '../../pages/ProductOptions/ProductOptionsButton/ProductOptionsButton';

function ContentLayout({ title, subtitle, content, button }) {
  return (
    <S.Card>
      <S.CardContent>
        <S.CardTitleWrap>
          {title && (
            <S.CardInnerWrap>
              <S.CardTitle>{title}</S.CardTitle>
            </S.CardInnerWrap>
          )}
          {button && <S.Button>+ 옵션 세트 추가</S.Button>}
        </S.CardTitleWrap>
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
