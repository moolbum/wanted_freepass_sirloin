import React, { useEffect, useState } from 'react';
import ProductOptionsButton from '../ProductOptions/ProductOptionsButton/ProductOptionsButton';
import * as S from './Nav.style';

const Nav = () => {
  const [submitData, setSubmitData] = useState([]);

  const fetchData = async () => {
    const data = await fetch('data/setData.json');
    const res = await data.json();
    setSubmitData(res);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const submit = () => {
    console.log(submitData);
    // return alert('저장', submitData);
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
