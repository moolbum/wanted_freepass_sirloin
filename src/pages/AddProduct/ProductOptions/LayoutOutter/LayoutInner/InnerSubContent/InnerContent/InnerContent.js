import React, { useState } from 'react';
import styled from 'styled-components';

function InnerContent() {
  const [Selected, setSelected] = useState('비과세');
  const handleSelect = e => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };

  return (
    <InnerSubContent>
      <OptionsNameInput placeholder="옵션명을 입력해주세요. (필수)" />
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
          <OptionsInput placeholder="재고(필수)" />
          <Text>개</Text>
        </OptionsInputWrap>
        <ReceiptCountry onChange={handleSelect} value={Selected}>
          <Option value="비과세" selected="selected">
            비과세
          </Option>
          <Option value="과세">과세</Option>
        </ReceiptCountry>
      </InputWrap>
      <AddProductOptionsButtonWrap>
        <AddProductOptionsButton>
          <Span>+</Span>추가 옵션 상품 등록
        </AddProductOptionsButton>
      </AddProductOptionsButtonWrap>
    </InnerSubContent>
  );
}

export default InnerContent;

const InnerSubContent = styled.form`
  /* height: 500px; */
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: red;
`;

const Text = styled.p`
  display: inline-block;
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
  /* width: 300px; */
  /* background: yellow; */
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
  ${props => props.theme.flex('center', 'space-between')}
  flex-wrap: wrap;
`;

const AddProductOptionsButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Span = styled.span`
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  padding: 0px 8px;
  margin-right: 8px;
  font-size: 26px;
`;

const AddProductOptionsButton = styled.button`
  font-size: 20px;
`;
