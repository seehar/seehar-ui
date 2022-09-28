/*
 * @Descripttion:
 * @version:
 * @Author: seehar
 * @Date: 2022-09-27 09:56:23
 * @LastEditors: seehar
 */
import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router";

import SeeharUi from "../packages";
import Preview from "./components/Preview.vue";

const app = createApp(App);
app.component("Preview", Preview);
app.use(SeeharUi).use(router).mount("#app");
