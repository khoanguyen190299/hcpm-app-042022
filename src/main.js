import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import HighchartsVue from 'highcharts-vue'
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import mitt from 'mitt';
import store from "@/composables/store";


const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app
    .use(router)
    .use(BootstrapVue3)
    .use(HighchartsVue)
    .use(store)
    .mount('#app')