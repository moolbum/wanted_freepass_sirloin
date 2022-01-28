import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../components/ContentLayout';
import Toggle from '../../components/Toggle';

import { CONTENT } from './AddProductData';

function AddProduct() {
  return (
    <>
      <Toggle />
      <AddProductContainer>
        {CONTENT.map(
          ({ id, title, content, margin, button, border, subtitle }) => {
            return (
              <ContentLayout
                key={id}
                title={title}
                subtitle={subtitle}
                content={content}
                margin={margin}
                button={button}
                border={border}
              />
            );
          }
        )}
      </AddProductContainer>
    </>
  );
}

export default AddProduct;

const AddProductContainer = styled.div``;
