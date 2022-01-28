import Deadline from './SalesDeadline/Deadline';
import Expose from './SalesDeadline/Expose';
import ProductOptionsButton from './ProductOptions/ProductOptionsButton/ProductOptionsButton';
import ProductOptions from './ProductOptions/ProductOptions';
import ProductDelivery from './ProductDelivery';

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
    subtitle: '상품 판매 기한',
    content: <Deadline />,
    margin: '80px',
    border: '0px',
  },
  {
    id: 2,
    title: '상품 옵션',
    content: <ProductOptions />,
    border: '0px',
    button: <ProductOptionsButton />,
  },
  {
    id: 19,
    margin: '80px',
  },

  {
    id: 20,
    title: '상품 배송 설정',
    subtitle: '사용자 배송일 출발일 지정',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 21,
    subtitle: '방문 수령',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 22,
    subtitle: '선 주문 예약 배송',
    content: <ProductDelivery />,
    margin: '80px',
    border: '0px',
    margin: '80px',
  },
  {
    id: 23,
    title: '상품 혜택 허용 설정',
    subtitle: '마일리지 적립',
    content: <ProductDelivery />,
    border: '0px',
    margin: '80px',
  },
  {
    id: 24,
    title: '기타 설정',
    subtitle: '감사카드 제공',
    content: <ProductDelivery />,
    border: '0px',
  },
];
