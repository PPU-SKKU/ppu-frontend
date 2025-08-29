const DummyPerfumeReviewList = [
  {
    id: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
    userId: 'user-001-uuid',
    perfume: {
      id: 101,
      koreanName: '아프레 롱뒤',
      originalName: "Apres l'Ondee",
      brandKoreanName: '겔랑',
      brandOriginalName: 'Guerlain',
      image: null,
    },
    testedDate: '2025-01-01',
    isLiked: true,
    score: 5,
    content: '화사하고 은은해서 봄날에 딱 어울리는 향이었어요.',
    wearTested: true,
  },
  {
    id: 'z9y8x7w6-v5u4-3210-tsrq-po987nmlk654',
    userId: 'user-001-uuid',
    perfume: {
      id: 102,
      koreanName: '블루 드 샤넬',
      originalName: 'Bleu de Chanel',
      brandKoreanName: '샤넬',
      brandOriginalName: 'Chanel',
      image: 'https://example.com/images/bleu-de-chanel.png',
    },
    testedDate: '2025-01-10',
    isLiked: false,
    score: 3,
    content: '처음에는 강렬하지만 시간이 지나면 조금 무거운 느낌이 났어요.',
    wearTested: true,
  },
  {
    id: 'm1n2o3p4-q5r6-s7t8-u9v0-wxyz12345678',
    userId: 'user-001-uuid',
    perfume: {
      id: 103,
      koreanName: '라 뉘 드 롱홈',
      originalName: "La Nuit de L'Homme",
      brandKoreanName: '입생로랑',
      brandOriginalName: 'Yves Saint Laurent',
      image:
        'https://images.unsplash.com/photo-1756142188854-34b1e9a9e415?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    testedDate: '2025-02-15',
    isLiked: true,
    score: 4,
    content: '은근히 매력적이고 저녁 약속에 잘 어울렸습니다.',
    wearTested: false,
  },
];

export default DummyPerfumeReviewList;
