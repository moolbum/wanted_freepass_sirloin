import React, { useState } from 'react';
import * as S from './ContentLayout.style';
import ProductOptionsButton from '../../pages/AddProduct/ProductOptions/ProductOptionsButton/ProductOptionsButton';
import ProductOptions from '../../pages/AddProduct/ProductOptions/ProductOptions';
import LayoutInner from '../../pages/AddProduct/ProductOptions/LayoutOutter/LayoutInner';

function ContentLayout({ title, subtitle, content, margin, button, border }) {
  const [countList, setCountList] = useState([]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = Number(countArr.slice(-1));
    counter += 1;
    // console.log(typeof counter);
    countArr.push(counter);
    setCountList(countArr);
    console.log(countArr);
    console.log(counter);
  };

  return (
    <div style={{ marginBottom: margin /*borderBottom: border*/ }}>
      <S.Card>
        <S.CardContent>
          <S.ContentWrapperBorder>
            {title && (
              <S.CardTitleWrap>
                {title && <S.CardTitle>{title}</S.CardTitle>}
                {button && (
                  <S.Button onClick={onAddDetailDiv}>+ 옵션 세트 추가</S.Button>
                )}
              </S.CardTitleWrap>
            )}
            <S.ContentWrapper>
              {subtitle ? (
                <>
                  <S.ContentTitleWrap>
                    <S.ContentTitle>{subtitle}</S.ContentTitle>
                  </S.ContentTitleWrap>
                  <S.InnerContent>{content}</S.InnerContent>
                </>
              ) : (
                <S.NoSubTitleContent>
                  <ProductOptions countList={countList} />
                </S.NoSubTitleContent>
              )}
            </S.ContentWrapper>
          </S.ContentWrapperBorder>
        </S.CardContent>
      </S.Card>
    </div>
  );
}

export default ContentLayout;
