import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },


  // {
  //   text: "公众号文章备份",
  //   icon: "laptop-code",
  //   link: "/article/newsletter/"
  // },

  {
    text: "文章合集",
    icon: "laptop-code",
    link: "/article/"
  },


  {
    text: "资源库",
    icon: "signs-post",
    prefix: "/resource/",
    children: ["software/", "websites/", "pan/"],
  },


]);
