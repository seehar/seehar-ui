/*
 * @Descripttion: 模块导出文件
 * @version:
 * @Author: seehar
 * @Date: 2022-09-28 09:59:03
 * @LastEditors: seehar
 */
import { App, Plugin } from "vue";
import Button from "./src/index.vue";

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component("h-button", Button);
  },
};
