import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";

import "./assets/tailwind.css";
import "./assets/css/main.css";
import i18n from "./includes/i18n";
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);
    app.use(VeeValidate);
    app.use(store);
    app.use(router);
    app.directive("icon", Icon);
    app.mount("#app");
  }
});
