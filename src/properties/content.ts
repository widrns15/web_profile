import {
  CategoryType,
  SidebarRightIconsType,
  NewsListProps,
  SelectionItemProps,
} from "../types/types";

export const sidebarRightIcons: SidebarRightIconsType[] = [
  {
    background: "#ffffff24",
    icon: "github.png",
    url: "https://github.com/widrns15",
  },
  {
    background: "#4e54c0",
    icon: "notion.png",
    url: "https://www.notion.so/c32213594e034193a376be78d957f708?v=2bb4ff872602410bb0083a4eafa59daf&pvs=4",
  },
  {
    background: "#12b886",
    icon: "velog.png",
    url: "https://velog.io/@widrns15",
  },
  {
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    icon: "insta.png",
    url: "https://www.instagram.com/_il._.il_",
  },
];

export const newsList: NewsListProps[] = [
  {
    key: "0",
    title: "이리저리 헤매고 공부하여 해결한 코드 기록하는 것을 즐깁니다",
    subTitle: "6개월 동안 매일 블로그를 작성하는 꾸준함을 가지고 있습니다",
    tags: [
      { text: "꾸준", color: "#d94b87" },
      { text: "기록", color: "#eb8052" },
      { text: "블로깅", color: "rgb(112, 185, 68)" },
    ],
  },
  {
    key: "1",
    title: "항상 끊임없이 노력하는 개발자가 되려고 노력합니다",
    subTitle:
      "기술 관련 영상을 살피며, 스스로 정보를 습득하고 프로젝트를 진행했습니다",
    tags: [
      { text: "열정", color: "#d94b87" },
      { text: "노력", color: "#eb8052" },
    ],
  },
  {
    key: "2",
    title: "학교 & 프로젝트 리더의 경험으로 소통하는 것을 좋아합니다",
    subTitle:
      "대학교 의장 경험과 프로젝트 팀장의 경험으로 소통이 중요하다고 생각합니다",
    tags: [
      { text: "소통", color: "#d94b87" },
      { text: "리더쉽", color: "#eb8052" },
    ],
  },
];

type SelectionItemListType = { [key: string]: SelectionItemProps[] };
export const topSelectionItemList: SelectionItemListType = {
  personalProject: [
    {
      key: "1",
      title: "STAT & US",
      subTitle: "유저의 스탯을 키울 수 있는 픽셀 컨셉의 SNS 식 커뮤니티",
      image: "STAT&US.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "React_Query", color: "#eb8052" },
        { text: "AWS", color: "rgb(112, 185, 68)" },
      ],
      url: "http://statandus.s3-website.ap-northeast-2.amazonaws.com/",
    },
    {
      key: "2",
      title: "stackOverflow (Clone)",
      subTitle: "최애의 i 팀만의 식으로 녹인 재해석 커뮤니티",
      image: "STACK.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
      url: "http://pre-project-oshinoko.s3-website.ap-northeast-2.amazonaws.com/",
    },
  ],
  studyGroup: [
    {
      key: "1",
      title: "코드스테이츠",
      subTitle: "프론트엔드 과정 (23.04 ~ 23.10)",
      image: "codestates.png",

      tags: [
        { text: "부트캠프", color: "#eb8052" },
        { text: "자기주도학습", color: "#d94b87" },
        { text: "페어시스템", color: "rgb(112, 185, 68)" },
      ],
      url: "https://www.codestates.com/",
    },
    {
      key: "2",
      title: "빡공 스터디 모임",
      subTitle: "자유주제 스터디 (23.06 ~ 23.10)",
      image: "study.jpg",

      tags: [
        { text: "스터디", color: "#eb8052" },
        { text: "디스코드", color: "#d94b87" },
        { text: "회고", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "3",
      title: "대학교 직무부트캠프",
      subTitle: "프론트엔드 첫걸음 (22.12 ~ 23.01)",
      image: "boot.png",

      tags: [
        { text: "대학교", color: "#eb8052" },
        { text: "직무부트캠프", color: "#d94b87" },
      ],
    },
  ],
  selfDevelopement: [
    {
      key: "1",
      title: "노마드코더",
      subTitle: "코딩 기술 유튜브 시청 & 공부",
      image: "nomad.png",

      tags: [
        { text: "자기개발", color: "#eb8052" },
        { text: "독서", color: "#d94b87" },
        { text: "생각정리", color: "rgb(112, 185, 68)" },
      ],
      url: "https://nomadcoders.co/",
    },
  ],
  hobby: [
    {
      key: "1",
      title: "유튜브 시청",
      subTitle: "트렌드는 생명 🔥",
      image: "youtube.png",
      tags: [{ text: "OTT", color: "#eb8052" }],
    },
    {
      key: "2",
      title: "게임",
      subTitle: "머리 식히려 했다가, 오히려 뜨거워지는 그 게임..",
      image: "lol.png",
      tags: [{ text: "Game", color: "#d94b87" }],
    },
  ],
};

export const topSelectionCategories: CategoryType[] = [
  { key: 1, label: "Personal Project", value: "personalProject" },
  { key: 2, label: "Teaching & Community", value: "studyGroup" },
  { key: 3, label: "Self Developement", value: "selfDevelopement" },
  { key: 4, label: "Hobby", value: "hobby" },
];
