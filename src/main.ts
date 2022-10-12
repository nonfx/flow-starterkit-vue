import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-core";
import "@cldcvr/flow-system-icon";
import "@cldcvr/flow-product-icon";

createApp(App).use(router).mount("#app");
