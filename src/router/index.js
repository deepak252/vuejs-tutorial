import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../components/BlogList.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/', name:'Home', component: Home },
    {path: '/blogs', name: 'BlogList', component: BlogList }
]

export default new createRouter({
    history: createWebHistory(),
    routes,
});

//-- Vue 2.**
// export default new VueRouter({
//     routes,
//   //   mode: 'hash', // default
//     mode: 'history'
// });
  
