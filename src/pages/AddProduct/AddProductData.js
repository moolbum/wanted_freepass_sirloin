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
    title: '여기에 넣으실 분은 margin80px 그대로 주시면 될 거 같아요',
    margin: '80px',
    border: '0px',
  },
  {
    id: 4,
    title: '상품 배송 설정',
    subtitle: '사용자 배송일 출발일 지정',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 5,
    subtitle: '방문 수령',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 6,
    subtitle: '선 주문 예약 배송',
    content: <ProductDelivery />,
    border: '0px',
  },
];
