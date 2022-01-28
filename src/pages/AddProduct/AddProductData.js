import Deadline from './SalesDeadline/Deadline';
import Expose from './SalesDeadline/Expose';
import ProductOptionsButton from './ProductOptions/ProductOptionsButton/ProductOptionsButton';
import ProductOptions from './ProductOptions/ProductOptions';

export const CONTENT = [
  {
    id: 1,
    title: '노출 및 판매기간 설정',
    subtitle: '상품 노출 기한',
    content: <Expose />,
    button: <ProductOptionsButton />,
    border: '0px',
  },
  {
    id: 2,
    subtitle: '상품 판매 기한',
    content: <Deadline />,
    margin: '80px',
  },
  {
    id: 3,
    title: '노출 및 판매기간 설정',
    subtitle: '상품 노출 기한',
    content: <Expose />,
    margin: '80px',
  },
  {
    id: 4,
    title: '상품 옵션',
    button: <ProductOptionsButton />,
    content: <ProductOptions />,
  },
];
