import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";

import "./assets/tailwind.css";
import "./assets/css/main.css";
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(VeeValidate);
    app.use(store);
    app.use(router);
    app.directive("icon", Icon);
    app.mount("#app");
  }
});
