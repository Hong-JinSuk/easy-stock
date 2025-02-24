import { SidebarMenu } from '@/types/types';

export const sidebarMenus: SidebarMenu[] = [
  { menuNm_ENG: 'News', menuNm_KO: '뉴스', link: '/' },
  {
    menuNm_ENG: 'Finance',
    menuNm_KO: '경제',
    link: '/finance',
    children: [
      {
        menuNm_ENG: 'News',
        menuNm_KO: '뉴스',
        children: [
          {
            menuNm_ENG: 'Technology',
            menuNm_KO: '기술',
            link: '/news/technology',
          },
          { menuNm_ENG: 'Biology', menuNm_KO: '바이오', link: '/news/biology' },
        ],
      },
      {
        menuNm_ENG: 'Markets',
        menuNm_KO: '마켓',
        link: '/markets',
        children: [
          { menuNm_ENG: 'ETF', menuNm_KO: 'ETF', link: '/markets/ETF' },
          {
            menuNm_ENG: 'Technology',
            menuNm_KO: '기술',
            link: '/markets/technology',
          },
          {
            menuNm_ENG: 'Biology',
            menuNm_KO: '바이오',
            link: '/markets/biology',
          },
        ],
      },
      {
        menuNm_ENG: 'Investor',
        menuNm_KO: '투자자',
        link: '/investor',
      },
    ],
  },
  { menuNm_ENG: 'My Portfolio', menuNm_KO: '포트폴리오', link: '/portfolio' },
  {
    menuNm_ENG: 'Community',
    menuNm_KO: '커뮤니티',
    link: '/community',
    children: [
      {
        menuNm_ENG: 'dashboard',
        menuNm_KO: '게시판',
        link: '/community/dashboard',
      },
      {
        menuNm_ENG: 'Q&A',
        menuNm_KO: '질문게시판',
        link: '/community/qna',
      },
    ],
  },
];
