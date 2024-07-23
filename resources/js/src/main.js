import {createApp} from 'vue';
import App from '@/App.vue';

import '@/assets/css/app.min.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/icons.min.css';
import '@/assets/css/custom.min.css';

import '@/assets/libs/bootstrap/js/bootstrap.bundle.min.js';
import '@/assets/libs/simplebar/simplebar.min.js';
import '@/assets/libs/feather-icons/feather.min.js';
import '@/assets/js/pages/plugins/lord-icon-2.1.0.js';
const app = createApp(App);

// pinia store
import {createPinia} from 'pinia';

const pinia = createPinia();
app.use(pinia);

// @ts-ignore
import router from '@/router';

app.use(router);

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';

app.use(PerfectScrollbar);

//vue-meta
import {createHead} from '@vueuse/head';

const head = createHead();
app.use(head);

// set default settings
import appSetting from '@/app-setting';

appSetting.init();

//vue-i18n
import i18n from '@/i18n';

app.use(i18n);

// popper
import Popper from 'vue3-popper';

app.component('Popper', Popper);


app.mount('#app');
