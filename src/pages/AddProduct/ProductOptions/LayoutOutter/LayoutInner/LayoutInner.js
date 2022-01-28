import React, { useState } from 'react';
import styled from 'styled-components';
import ProductOptionsButton from '../../ProductOptionsButton/ProductOptionsButton';

function LayoutInner({ onRemove }) {
  const [Selected, setSelected] = useState('비과세');
  const handleSelect = e => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <ButtonWrap>
        <Button onClick={onRemove}>삭제</Button>
      </ButtonWrap>
      <InnerContentWrap>
        <InnerContent>
          <ProductOptionsButton borderColor="#333">
            + 이미지 첨부
          </ProductOptionsButton>
        </InnerContent>
        <InnerSubContent>
          <OptionsNameInput placeholder="옵션명을 입력해주세요. (필수)" />
          {/* <InputWrap> */}
          {/* <OptionsInputWrap>
              <OptionsInput placeholder="상품 판매가(필수)" />원
            </OptionsInputWrap>
            <Text>할인율 %</Text>
            <OptionsInputWrap>
              <OptionsInput placeholder="상품 판매가(필수)" />원
            </OptionsInputWrap>
            <OptionsInputWrap>
              <OptionsInput placeholder="상품" />원
            </OptionsInputWrap>
            {/* <OptionsInput placeholder="재고(필수)" />개 */}
          {/* <ReceiptCountry onChange={handleSelect} value={Selected}>
              <Option value="비과세" selected="selected">
                비과세
              </Option>
              <Option value="과세">과세</Option>
            </ReceiptCountry> */}
          {/* </InputWrap> */}
          <InputWrap>
            <OptionsInputWrap>
              <OptionsInput placeholder="상품 판매가(필수)" />
              <Text>원</Text>
            </OptionsInputWrap>
            <Text>할인율 %</Text>
            <OptionsInputWrap>
              <OptionsInput placeholder="상품 판매가(필수)" />
              <Text>원</Text>
            </OptionsInputWrap>
            <OptionsInputWrap>
              <OptionsInput placeholder="상품" />
              <Text>원</Text>
            </OptionsInputWrap>
            <ReceiptCountry onChange={handleSelect} value={Selected}>
              <Option value="비과세" selected="selected">
                비과세
              </Option>
              <Option value="과세">과세</Option>
            </ReceiptCountry>
          </InputWrap>
        </InnerSubContent>
      </InnerContentWrap>
    </>
  );
}

export default LayoutInner;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 6px 26px;
  color: ${props => props.color};
  font-size: 16px;
  line-height: 28px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;

const InnerContentWrap = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid yellow;
  margin-bottom: 60px;
`;

const InnerContent = styled.div`
  background: #f2f2f2;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const InnerSubContent = styled.div`
  height: 500px;
  padding: 10px;
  background: #fff;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Text = styled.div`
  padding: 0 15px 0 6px;
`;

const OptionsNameInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 18px;
  margin-bottom: 14px;
`;

const OptionsInputWrap = styled.div`
  width: 300px;
  background: yellow;
`;

const Input = styled.input`
  display: inline-block;
  background: blue;
`;
const OptionsInput = styled.input`
  padding: 14px 0;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 18px;
`;

const ReceiptCountry = styled.select.attrs({
  name: 'country',
})`
  padding: 14px;
  color: #333333;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #d3d7e1;
`;

const Option = styled.option`
  font-size: 3rem;
`;

const InputWrap = styled.div`
  display: flex;
`;
