import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },

    {
      text: "电子书",
      icon: "book",
      prefix: "books/",
      children: "structure",
    },

    {
      text: "工具",
      icon: "tools",
      prefix: "tools/",
      children: "structure",
    },
  ],
});
