import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@cldcvr/flow-core/dist/types/vue3";

import("@cldcvr/flow-core").then(async () => {
  await import("@cldcvr/flow-system-icon");
  await import("@cldcvr/flow-product-icon");
  createApp(App).use(router).mount("#app");
});
