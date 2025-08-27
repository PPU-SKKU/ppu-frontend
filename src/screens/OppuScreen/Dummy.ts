import colors from '../../theme/color';
import { OppuItemProps } from './components/OppuItem';

export const DummyOppuItem: OppuItemProps = {
  date: new Date('2025-08-27'),
  tag: {
    id: 'tag1',
    label: '오뿌',
    color: colors.purple,
  },
  perfumes: [
    {
      perfum: {
        id: 1,
        brandKoreanName: '톰 포드',
        brandOriginalName: '',
        koreanName: '블랙 오키드',
        originalName: '',
        image: 'https://i.ibb.co/kgjsZWMz/Image.png',
      },
      spray: 3,
    },
    {
      perfum: {
        id: 2,
        brandKoreanName: '아틀리에 코롱',
        brandOriginalName: '',
        koreanName: '라보라토리 오브 화이트',
        originalName: '',
        image: 'https://i.ibb.co/kgjsZWMz/Image.png',
      },
      spray: 1,
    },
  ],
  photos: [
    'https://images.unsplash.com/photo-1756142188854-34b1e9a9e415?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699473873209-0a2af29fc0d6?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  record:
    '잔잔한 우디향이 은은하게 퍼져서 기분이 맑아진다. 지나가는 바람처럼 가볍지만 오래 남는다.',
};

export const dummyList: OppuItemProps[] = [DummyOppuItem];
