import React, { useState } from 'react';
import styled from 'styled-components';
import ContentLayout from 'components/ContentLayout';
import Nav from './Nav';

import { CONTENT } from './AddProductData';

function AddProduct() {
<<<<<<< HEAD
=======
  const [result, setResult] = useState({
    name: '',
  });

  const contentResult = e => {
    const { value, name } = e.target;
    setResult({ ...result, [name]: value });
  };

>>>>>>> master
  return (
    <>
      <Nav />
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

export default React.memo(AddProduct);

const AddProductContainer = styled.div`
  padding: 100px 50px 50px 50px;
`;
