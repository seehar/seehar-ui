/*
 * @Descripttion:
 * @version:
 * @Author: seehar
 * @Date: 2022-07-11 14:56:49
 * @LastEditors: seehar
 * @LastEditTime: 2022-09-28 11:22:22
 */
import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "按钮",
    name: "Button",
    path: "/components/button",
    component: () => import(`../../packages/Button/docs/README.md`),
  },
];

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
