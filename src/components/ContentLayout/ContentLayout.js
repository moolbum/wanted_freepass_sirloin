import React from 'react';
import * as S from './ContentLayout.style';
import ProductOptionsButton from '../../pages/AddProduct/ProductOptions/ProductOptionsButton/ProductOptionsButton';

function ContentLayout({ title, subtitle, content, margin, button, border }) {
  return (
    <div style={{ marginBottom: margin /*borderBottom: border*/ }}>
      <S.Card>
        <S.CardContent>
          {title && (
            <S.CardTitleWrap>
              {title && <S.CardTitle>{title}</S.CardTitle>}
              {button && <S.Button>+ 옵션 세트 추가</S.Button>}
            </S.CardTitleWrap>
          )}
          <S.ContentWrapperBorder>
            <S.ContentWrapper>
              {subtitle ? (
                <>
                  <S.ContentTitleWrap>
                    <S.ContentTitle>{subtitle}</S.ContentTitle>
                  </S.ContentTitleWrap>
                  <S.InnerContent>{content}</S.InnerContent>
                </>
              ) : (
                <S.NoSubTitleContent>{content}</S.NoSubTitleContent>
              )}
            </S.ContentWrapper>
          </S.ContentWrapperBorder>
        </S.CardContent>
      </S.Card>
    </div>
  );
}

export default ContentLayout;
