import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
const app = createApp(App);

components.forEach(element => {
    app.component(element.name, element)
});
app.use(VueLazyload, {
    preLoad: 1.5,
    error: require('./assets/gif/error.gif'), // Укажите путь к изображению для ошибок
    loading: require('./assets/gif/loading.gif'), // Укажите путь к изображению загрузки
    attempt: 1
});
app.use(store).use(router).mount('#app')
