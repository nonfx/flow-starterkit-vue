import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@cldcvr/flow-core/dist/types/vue3";

Promise.all([
  import("@cldcvr/flow-core"),
  import("@cldcvr/flow-system-icon"),
  import("@cldcvr/flow-product-icon"),
  import("@cldcvr/flow-core/dist/style.css"),
]).then(async () => {
  createApp(App).use(router).mount("#app");
});
