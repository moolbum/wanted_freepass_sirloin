import React, { useState } from 'react';
import * as S from './Categories.style';
import Input from 'components/Input';
import { CATEGORIES } from './data';

const Categories = () => {
  const [isChecked, setIsChecked] = useState();
  const [categories, setCategories] = useState([]);

  const onChecked = e => {
    const { value, checked } = e.target;
    setIsChecked(checked);
    checked && setCategories([...categories, value]);
  };
  console.log(categories);
  console.log('isChecked', isChecked);

  const deleteCategory = (value, i) => {
    setCategories(
      [...categories].filter(value => [...categories].indexOf(value) !== i)
    );
    setIsChecked(prev => !prev);

    console.log('삭제해', value, i);
  };
  console.log(!!categories.length);

  return (
    <S.Container>
      <S.Wrapper>
        {CATEGORIES.map(data => {
          return (
            <Input
              key={data.id}
              name={data.value}
              type="checkbox"
              value={data.value}
              onChange={onChecked}
            />
          );
        })}
      </S.Wrapper>
      <S.Wrapper>
        {!!categories ? '' : '카테고리를 지정해주세요'}
        {categories.map((idx, i) => {
          return (
            <S.Tag key={idx}>
              {categories[i]}
              <S.Delete onClick={() => deleteCategory(categories[i], i)}>
                X
              </S.Delete>
            </S.Tag>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default Categories;
