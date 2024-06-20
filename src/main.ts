import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

const app = createApp(App);
app.use(KeenUI);
app.use(router);
app.mount('#app');
