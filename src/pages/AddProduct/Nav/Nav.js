import React from 'react';
import ProductOptionsButton from '../ProductOptions/ProductOptionsButton/ProductOptionsButton';
import * as S from './Nav.style';
import { useSetData } from 'hooks/useSetData/useSetData';

const Nav = () => {
  const data = useSetData();
  const submit = () => {
    console.log(data);
  };

  return (
    <S.NavContainer>
      <S.NavWrap>
        <S.Nav>상품 등록</S.Nav>
        <ProductOptionsButton
          children="저장하기"
          bgColor={props => props.theme.blue}
          borderColor={props => props.theme.blue}
          color="#fff"
          style={{ marginRight: '50px' }}
          onClick={submit}
        />
      </S.NavWrap>
    </S.NavContainer>
  );
};

export default Nav;
