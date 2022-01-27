import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../utils/ContentLayout';
import SalesPeriod from './SalesPeriod/index';

function AddProduct() {
  return (
    <AddProductContainer>
      <ContentLayout
        title="노출 및 판매기간 설정"
        subtitle="상품 노출 기한"
        content={<SalesPeriod />}
      />
    </AddProductContainer>
  );
}

export default AddProduct;

const AddProductContainer = styled.div``;
