export type sidebarArrType = {
  id: number;
  title: string;
  icon: any;
};

export type dashboardArrType = {
  id: number;
  title: string;
  component?: any;
};
export type tableDataType = {
  id: number;
  tableTitle: string;
  balance1: number;
  balance2: number;
  pending: number;
  sales: number;
};

export type requestTableArrType = {
  id: number;
  title: string;
  amount: number;
};

export type menuArrType = {
  id: number;
  title?: string;
  icon?: any;
  subMenu?: subMenuType[];
  path?: string;
};

export type subMenuType = {
  id?: number;
  subTitle?: string;
  ultraSubMenu?: ultraSubMenuType[];
  path?: string;
};
export type ultraSubMenuType = {
  id?: number;
  subTitle?: string;
  path?: string;
};

export type heroArrType = {
  id: number;
  title: string;
  subTitle?: string;
  img: {
    src: string;
  };
};

export type homeArrType = {
  id: number;
  title: string;
  subTitle?: string;
  img: {
    src: string;
  };
  subTitle2?: string;
};

export type blogArrType = {
  id: number;
  title: string;
  date: string;
  img: {
    src: string;
  };
};

export type aboutTeamArrType = {
  id: number;
  title: string;
  img: {
    src: string;
  };
  description: string;
};

export type techTeamArrType = {
  id: number;
  title: string;
  img: {
    src: string;
  };
};
// BLOG section
export type blogsArrType = {
  id: number;
  img: {
    src: string;
  };
  title: string;
  subtitle: string;
  date: string;
  names: string;
  description: string;
};
export type cardDataType = {
  id: number;
  img1: {
    src: string;
  };
  cardtitleOne: string;
  cardtitleTwo: string;
  cardtitleThree: string;
  cardtitlefour: string;
  cardtitlefive: string;
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  contentFour: string;
  contentFive: string;
  contentSix: string;
  contentSeven: string;
  contentEight: string;
  contentNine: string;
  contentTen: string;
  contentPone: string;
  contentPtwo: string;
  contentPthree: string;
  contentfour: string;
  contentPfive: string;
  contentPsix: string;
  contentPseven: string;
  contentPeight: string;
  contentPnine: string;
  contentPten: string;
  contentP11: string;
  contentP12: string;
};
