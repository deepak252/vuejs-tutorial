import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
.use(router)
.mount('#app')

// -- OR
// const app = createApp(App)
// app.use(router)
// app.mount('#app')

// -- Vue 2.**
// Vue.use(VueRouter);
// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

