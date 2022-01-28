import React from 'react';
import * as S from './ContentLayout.style';
import ProductOptionsButton from '../../pages/AddProduct/ProductOptions/ProductOptionsButton/ProductOptionsButton';

function ContentLayout({ title, subtitle, content, margin, button, border }) {
  return (
    <S.Card style={{ marginBottom: margin, borderBottom: border }}>
      <S.CardContent>
        <S.CardTitleWrap>
          {title && <S.CardTitle>{title}</S.CardTitle>}
          {button && <S.Button>+ 옵션 세트 추가</S.Button>}
        </S.CardTitleWrap>
        <S.ContentWrapper>
          {subtitle ? (
            <>
              <S.ContentTitleWrap>
                <S.ContentTitle>{subtitle}</S.ContentTitle>
              </S.ContentTitleWrap>
              <S.InnerContent>{content}</S.InnerContent>
            </>
          ) : (
            <S.NoSubTitleWrap>
              <S.NoSubTitleContent>{content}</S.NoSubTitleContent>
            </S.NoSubTitleWrap>
          )}
        </S.ContentWrapper>
      </S.CardContent>
    </S.Card>
  );
}

export default ContentLayout;
