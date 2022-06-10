import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import component from './components'

import './styles/app.scss'

const app = createApp(App).use(store).use(router)

app.component("Header", component.Header)

app.mount('#app')
