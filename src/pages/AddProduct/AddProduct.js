import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../utils/ContentLayout';
import ProductOptions from '../ProductOptions/ProductOptions';

import { CONTENT } from './AddProductData';

function AddProduct() {
  return (
    <AddProductContainer>
      {CONTENT.map(data => {
        return (
          <ContentLayout
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            content={data.content}
            margin={data.margin}
            button={data.button}
            border={data.border}
          />
        );
      })}
    </AddProductContainer>
  );
}

export default AddProduct;

const AddProductContainer = styled.div``;
