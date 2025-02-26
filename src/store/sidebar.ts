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
        menuNm_ENG: 'Investor',
        menuNm_KO: '투자자',
        children: [
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
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investodsfdsfdsfdsfsdfr',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
          {
            menuNm_ENG: 'Investor',
            menuNm_KO: '투자자',
            link: '/investor',
          },
        ],
      },
      {
        menuNm_ENG: 'My Portfolio',
        menuNm_KO: '포트폴리오',
        link: '/portfolio',
        children: [
          { menuNm_ENG: 'My Portfolio 1', menuNm_KO: '내 포트폴리오 1' },
          { menuNm_ENG: 'My Portfolio 2', menuNm_KO: '내 포트폴리오 2' },
          { menuNm_ENG: 'My Portfolio 3', menuNm_KO: '내 포트폴리오 3' },
          { menuNm_ENG: 'My Portfolio 4', menuNm_KO: '내 포트폴리오 4' },
          { menuNm_ENG: 'My Portfolio 5', menuNm_KO: '내 포트폴리오 5' },
          { menuNm_ENG: 'My Portfolio 6', menuNm_KO: '내 포트폴리오 6' },
          { menuNm_ENG: 'My Portfolio 7', menuNm_KO: '내 포트폴리오 7' },
          { menuNm_ENG: 'My Portfolio 8', menuNm_KO: '내 포트폴리오 8' },
          { menuNm_ENG: 'My Portfolio 9', menuNm_KO: '내 포트폴리오 9' },
          { menuNm_ENG: 'My Portfolio 10', menuNm_KO: '내 포트폴리오 10' },
          { menuNm_ENG: 'My Portfolio 11', menuNm_KO: '내 포트폴리오 11' },
          { menuNm_ENG: 'My Portfolio 12', menuNm_KO: '내 포트폴리오 12' },
          { menuNm_ENG: 'My Portfolio 13', menuNm_KO: '내 포트폴리오 13' },
          { menuNm_ENG: 'My Portfolio 14', menuNm_KO: '내 포트폴리오 14' },
          { menuNm_ENG: 'My Portfolio 15', menuNm_KO: '내 포트폴리오 15' },
          { menuNm_ENG: 'My Portfolio 16', menuNm_KO: '내 포트폴리오 16' },
          { menuNm_ENG: 'My Portfolio 17', menuNm_KO: '내 포트폴리오 17' },
          { menuNm_ENG: 'My Portfolio 18', menuNm_KO: '내 포트폴리오 18' },
          { menuNm_ENG: 'My Portfolio 19', menuNm_KO: '내 포트폴리오 19' },
          { menuNm_ENG: 'My Portfolio 20', menuNm_KO: '내 포트폴리오 20' },
          { menuNm_ENG: 'My Portfolio 21', menuNm_KO: '내 포트폴리오 21' },
          { menuNm_ENG: 'My Portfolio 22', menuNm_KO: '내 포트폴리오 22' },
          { menuNm_ENG: 'My Portfolio 23', menuNm_KO: '내 포트폴리오 23' },
          { menuNm_ENG: 'My Portfolio 24', menuNm_KO: '내 포트폴리오 24' },
          { menuNm_ENG: 'My Portfolio 25', menuNm_KO: '내 포트폴리오 25' },
          { menuNm_ENG: 'My Portfolio 26', menuNm_KO: '내 포트폴리오 26' },
          { menuNm_ENG: 'My Portfolio 27', menuNm_KO: '내 포트폴리오 27' },
          { menuNm_ENG: 'My Portfolio 28', menuNm_KO: '내 포트폴리오 28' },
          { menuNm_ENG: 'My Portfolio 29', menuNm_KO: '내 포트폴리오 29' },
          { menuNm_ENG: 'My Portfolio 30', menuNm_KO: '내 포트폴리오 30' },
          { menuNm_ENG: 'My Portfolio 31', menuNm_KO: '내 포트폴리오 31' },
        ],
      },
      {
        menuNm_ENG: 'finanace navigation',
        menuNm_KO: '경제 네비게이션 헤더 테스트',
      },
    ],
  },
  {
    menuNm_ENG: 'My Portfolio',
    menuNm_KO: '포트폴리오',
    link: '/portfolio',
  },
  {
    menuNm_ENG: 'Community',
    menuNm_KO: '커뮤니티',
    link: '/community',
    children: [
      {
        menuNm_ENG: 'dashboard',
        menuNm_KO: '게시판',
        link: '/community/dashboard',
        children: [
          {
            menuNm_ENG: 'test',
            menuNm_KO: '테스트',
          },
        ],
      },
      {
        menuNm_ENG: 'Q&A',
        menuNm_KO: '질문게시판',
        link: '/community/qna',
      },
    ],
  },
];
