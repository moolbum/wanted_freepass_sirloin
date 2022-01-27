import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../utils/ContentLayout';

function AddProduct() {
  return (
    <AddProductContainer>
      sdf
      <ContentLayout title="제목" subtitle="subtitle" />
    </AddProductContainer>
  );
}

export default AddProduct;

const AddProductContainer = styled.div`
  color: ${props => props.theme.blue};
`;
