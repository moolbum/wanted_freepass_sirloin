import Deadline from './SalesDeadline/Deadline';
import Expose from './SalesDeadline/Expose';
import ProductOptionsButton from './ProductOptions/ProductOptionsButton/ProductOptionsButton';
import ProductOptions from './ProductOptions/ProductOptions';
import Categories from './ProductInfos/Categories/Categories';
import DepartureDate from './ProductDelivery/DepartureDate/DepartureDate';
import Visited from './ProductDelivery/Visited/Visited';
import PreOrder from './ProductDelivery/PreOrder/PreOrder';
import ProductBenefit from './ProductBenefit/ProductBenefit';
import OtherOption from './OtherOption/OtherOption';

export const CONTENT = [
  {
    id: 0,
    title: '노출 및 판매기간 설정',
    subtitle: '상품 노출 기한',
    content: <Expose />,
  },
  {
    id: 1,
    subtitle: '상품 판매 기한',
    content: <Deadline />,
    margin: '80px',
  },
  {
    id: 2,
    title: '상품 기본 정보',
    subtitle: '카테고리',
    content: <Categories />,
  },
  {
    id: 3,
    subtitle: '필터 태그',
    content: <Deadline />,
  },
  {
    id: 4,
    subtitle: '상품명',
    content: <Deadline />,
  },
  {
    id: 5,
    subtitle: '상품 구성 소개 정보',
    content: <Deadline />,
  },
  {
    id: 6,
    subtitle: '상품 썸네일',
    content: <Deadline />,
  },
  {
    id: 7,
    subtitle: '상품 대표 이미지',
    content: <Deadline />,
  },
  {
    id: 8,
    subtitle: '상품 총 재고',
    content: <Deadline />,
    margin: '80px',
    button: <ProductOptionsButton />,
  },
  {
    id: 9,
    title: '상품 옵션',
    button: <ProductOptionsButton />,
    content: <ProductOptions />,
    margin: '80px',
  },
  {
    id: 10,
    title: '상품 배송 설정',
    subtitle: '사용자 배송일 출발일 지정',
    content: <DepartureDate />,
  },
  {
    id: 11,
    subtitle: '방문 수령',
    content: <Visited />,
  },
  {
    id: 12,
    subtitle: '선 주문 예약 배송',
    content: <PreOrder />,
    margin: '80px',
  },
  {
    id: 13,
    title: '상품 혜택 허용 설정',
    subtitle: '마일리지 적립',
    content: <ProductBenefit />,
    margin: '80px',
  },
  {
    id: 14,
    title: '기타 설정',
    subtitle: '감사 카드 제공',
    content: <OtherOption />,
    margin: '80px',
  },
];
