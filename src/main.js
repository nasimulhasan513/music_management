import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";

import GlobalComponents from "./includes/_globals";
import ProgressBar from "./includes/progress-bar";
import "nprogress/nprogress.css";

ProgressBar(router);

import "./assets/tailwind.css";
import "./assets/css/main.css";
import i18n from "./includes/i18n";
import "./registerServiceWorker";
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);
    app.use(VeeValidate);
    app.use(GlobalComponents);
    app.use(store);
    app.use(router);
    app.directive("icon", Icon);
    app.mount("#app");
  }
});
