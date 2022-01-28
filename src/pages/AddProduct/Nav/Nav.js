import React from 'react';
import ProductOptionsButton from '../ProductOptions/ProductOptionsButton/ProductOptionsButton';
import * as S from './Nav.style';

const Nav = () => {
  const submit = () => {
    return alert('저장');
  };

  return (
    <S.NavContainer>
      <S.NavWrap>
        <S.Nav>상품 등록</S.Nav>
        <ProductOptionsButton
          children="저장하기"
          bgColor={props => props.theme.blue}
          borderColor={props => props.theme.blue}
          color={props => props.theme.white}
          style={{ marginRight: '50px' }}
          onClick={submit}
        />
      </S.NavWrap>
    </S.NavContainer>
  );
};

export default Nav;
