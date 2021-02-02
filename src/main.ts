import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueCompositionApi from "@vue/composition-api";
import formCreate from "@form-create/ant-design-vue";
import FormTable from "./components/FormTable.vue";

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(formCreate);
Vue.component("FormTable", FormTable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
