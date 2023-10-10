import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "认知导览",
  description: "你的互联网资源库",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
