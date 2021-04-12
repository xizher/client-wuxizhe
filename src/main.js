import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './service'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/index.css'

const app = createApp(App)
  .use(router)
  .use(antd)

app.config.globalProperties.$primevue = {
  ripple: true
}

app.mount('#app')
