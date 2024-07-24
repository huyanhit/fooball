import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createHead} from '@vueuse/head';
import {createBootstrap} from 'bootstrap-vue-next'

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/i18n';

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/app.min.css';
import '@/assets/css/icons.min.css';
import '@/assets/css/custom.min.css';

import '@/assets/libs/simplebar/simplebar.min.js';
import '@/assets/libs/feather-icons/feather.min.js';
import '@/assets/js/pages/plugins/lord-icon-2.1.0.js';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app.use(pinia);
app.use(router);
app.use(head);
app.use(i18n);
app.use(createBootstrap())

app.mount('#app');
