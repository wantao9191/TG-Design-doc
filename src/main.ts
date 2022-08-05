import { createApp } from 'vue'
import './index.scss'
import './assets/css/normal.scss'
// import './libs/tg-ui.scss'
import { App } from './App.tsx'
import router from './router'
import store from './store'
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import tgdesign from "@wantao/tgdesign";
const app = createApp(App)
app.use(router).use(store).use(tgdesign)
app.mount('#app')
