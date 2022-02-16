import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
const pinia = createPinia();
import './styles/base.css';
import './styles/index.css';

createApp(App).use(pinia).mount('#app');
