import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "laptop-code",
      prefix: "article/",
      link: "article/",
      children: "structure",
    },

    {
      text: "微信社群",
      icon: "info",
      prefix: "other/",
      children: "structure",
    },

    {
      text: "资源库",
      icon: "tools",
      prefix: "resource/",
      children: "structure",
    },  

    

  ],
});
