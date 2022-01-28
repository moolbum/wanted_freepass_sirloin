import Deadline from './SalesDeadline/Deadline';
import Expose from './SalesDeadline/Expose';
import ProductOptionsButton from './ProductOptions/ProductOptionsButton/ProductOptionsButton';
import ProductOptions from './ProductOptions/ProductOptions';

export const CONTENT = [
  {
    id: 0,
    title: '노출 및 판매기간 설정',
    subtitle: '상품 노출 기한',
    content: <Expose />,
    border: '0px',
  },
  {
    id: 1,
    subtitle: '상품 노출 기한',
    content: <Deadline />,
    margin: '80px',
    border: '0px',
  },
  {
    id: 2,
    title: '노출 및 판매기간 설정',
    content: <Expose />,
    border: '0px',
  },
  {
    id: 3,
    title: '상품 옵션',
    content: <ProductOptions />,
    border: '0px',
    button: <ProductOptionsButton />,
  },
];
