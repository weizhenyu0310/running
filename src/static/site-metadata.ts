interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Weizhenyu Running',
  siteUrl: 'https://weizhenyu0310.github.io/running_page/',
  logo: 'https://img-20210107.oss-cn-beijing.aliyuncs.com/img/微信截图_20241231155119.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
