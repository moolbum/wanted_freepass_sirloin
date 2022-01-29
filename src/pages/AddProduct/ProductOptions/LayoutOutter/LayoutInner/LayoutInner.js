import React, { useState } from 'react';
import * as S from './LayoutInner.style';
import ProductOptionsButton from '../../ProductOptionsButton/ProductOptionsButton';
import InnerSubContent from './InnerSubContent/InnerSubContent';

function LayoutInner() {
  const [inputs, setInputs] = useState({
    optionName: '',
    normalPrice: '',
    salesPrice: '',
    stocks: '',
  });

  const { optionName, normalPrice, salesPrice, stocks } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  console.log(inputs);
  const [Selected, setSelected] = useState('비과세');
  const handleSelect = e => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };

  const [detailOptions, setDetailOptions] = useState([]);

  const onHandleDetailOptions = () => {
    let countArr = [...detailOptions];
    let counter = Number(countArr.slice(-1));
    counter += 1;
    countArr.push(counter);
    setDetailOptions(countArr);
  };
  return (
    <>
      <S.ButtonWrap>
        <S.Button>삭제</S.Button>
      </S.ButtonWrap>
      <S.InnerContentWrap>
        <S.InnerContent>
          <ProductOptionsButton borderColor="#333">
            + 이미지 첨부
          </ProductOptionsButton>
        </S.InnerContent>
        <S.InnerSubContent>
          <S.OptionsNameInput
            onChange={onChange}
            value={optionName}
            name="optionName"
            placeholder="옵션명을 입력해주세요. (필수)"
          />
          <S.InputWrap>
            <S.OptionsInputWrap>
              <S.OptionsInput
                onChange={onChange}
                value={normalPrice}
                name="normalPrice"
                type="number"
                placeholder="상품 정상가(필수)"
              />
              <S.Text>원</S.Text>
            </S.OptionsInputWrap>
            <S.Text>할인율 %</S.Text>
            <S.OptionsInputWrap>
              <S.OptionsInput
                onChange={onChange}
                value={salesPrice}
                name="salesPrice"
                type="number"
                placeholder="상품 판매가(필수)"
              />
              <S.Text>원</S.Text>
            </S.OptionsInputWrap>
            <S.OptionsInputWrap>
              <S.OptionsInput
                onChange={onChange}
                value={stocks}
                name="stocks"
                type="number"
                placeholder="재고(필수)"
              />
              <S.Text>개</S.Text>
            </S.OptionsInputWrap>
            <S.ReceiptCountry onChange={handleSelect} value={Selected}>
              <S.Option value="비과세" selected="selected">
                비과세
              </S.Option>
              <S.Option value="과세">과세</S.Option>
            </S.ReceiptCountry>
          </S.InputWrap>
          <S.AddProductOptionsButtonWrap>
            <S.AddProductOptionsButton>
              <S.Span>+</S.Span>추가 옵션 상품 등록
            </S.AddProductOptionsButton>
          </S.AddProductOptionsButtonWrap>
        </S.InnerSubContent>
        <InnerSubContent detailOptions={detailOptions} />
        <ProductOptionsButton
          onClick={onHandleDetailOptions}
          width="100%"
          margin="20px 0 40px 0"
        >
          + 옵션 추가
        </ProductOptionsButton>
      </S.InnerContentWrap>
    </>
  );
}

export default LayoutInner;
