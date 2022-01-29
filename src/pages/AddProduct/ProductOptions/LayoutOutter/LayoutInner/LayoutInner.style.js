import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 6px 26px;
  color: #e33e38;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid #e33e38;
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;

export const InnerContentWrap = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 60px;
`;

export const InnerContent = styled.div`
  padding: 100px;
  margin-bottom: 10px;
  background: #f2f2f2;
  border-radius: 4px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const InnerSubContent = styled.div`
  /* height: 500px; */
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Text = styled.p`
  display: inline-block;
  padding: 0 15px 0 6px;
`;

export const OptionsNameInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 18px;
  margin-bottom: 14px;
`;

export const OptionsInputWrap = styled.div`
  /* width: 300px; */
  /* background: yellow; */
`;

export const Input = styled.input`
  display: inline-block;
  background: blue;
`;

export const OptionsInput = styled.input`
  padding: 14px 0;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 18px;
`;

export const ReceiptCountry = styled.select.attrs({
  name: 'country',
})`
  padding: 14px;
  color: #333333;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #d3d7e1;
`;

export const Option = styled.option`
  font-size: 3rem;
`;

export const InputWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')}
  flex-wrap: wrap;
`;

export const AddProductOptionsButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Span = styled.span`
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  padding: 0px 8px;
  margin-right: 8px;
  font-size: 26px;
`;

export const AddProductOptionsButton = styled.button`
  font-size: 20px;
`;
