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
    title: '상품 기본 정보',
    subtitle: '카테고리',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 3,
    subtitle: '필터 태그',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 4,
    subtitle: '상품명',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 5,
    subtitle: '상품 구성 소개 정보',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 6,
    subtitle: '상품 썸네일',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 7,
    title: '상품 대표 이미지',
    subtitle: '카테고리',
    content: <Deadline />,
    border: '0px',
  },
  {
    id: 8,
    subtitle: '상품 총 재고',
    content: <Deadline />,
    margin: '80px',
    border: '0px',
  },
  {
    id: 9,
    title: '상품 배송 설정',
    subtitle: '사용자 배송일 출발일 지정',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 10,
    subtitle: '방문 수령',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 11,
    subtitle: '선 주문 예약 배송',
    content: <ProductDelivery />,
    border: '0px',
  },
  {
    id: 12,
    title: '상품 옵션',
    content: <ProductOptions />,
    border: '0px',
    button: <ProductOptionsButton />,
  },
];
