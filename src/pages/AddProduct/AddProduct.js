import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../utils/ContentLayout';
import ProductOptions from '../ProductOptions/ProductOptions';

function AddProduct() {
  return (
    <AddProductContainer>
      <ContentLayout
        title="상품 옵션"
        content={<ProductOptions />}
        button="옵션"
      ></ContentLayout>
    </AddProductContainer>
  );
}

export default AddProduct;

const AddProductContainer = styled.div`
  color: ${props => props.theme.blue};
`;
