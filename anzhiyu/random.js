var posts=["2023/10/24/2023-10-24-总结&新的开始/","2022/12/01/Nacos下载与配置/","2023/09/25/Twikoo评论Vercel 部署/","2022/11/27/hello-word/","2023/03/28/idea2017-2021激活方案/","2023/06/01/anzhiyu主题标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };