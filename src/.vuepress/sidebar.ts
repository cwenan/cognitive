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
      text: "工具",
      icon: "tools",
      prefix: "tools/",
      children: "structure",
    },

    {
      text: "相关",
      icon: "info",
      prefix: "other/",
      children: "structure",
    },

  

    

  ],
});
