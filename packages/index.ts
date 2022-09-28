/*
 * @Descripttion: 组件库导出文件
 * @version:
 * @Author: seehar
 * @Date: 2022-09-28 09:57:41
 * @LastEditors: seehar
 */
import { App, Plugin } from "vue";

import { ButtonPlugin } from "./Button";

const SeeharUiPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default SeeharUiPlugin;

export * from "./Button";
