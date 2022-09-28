/*
 * @Descripttion:
 * @version:
 * @Author: seehar
 * @Date: 2022-09-28 11:01:00
 * @LastEditors: seehar
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
