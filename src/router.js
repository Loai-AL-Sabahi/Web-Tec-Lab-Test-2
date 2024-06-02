import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ProfilePage from './views/ProfilePage.vue'
import PhotosPage from './views/PhotosPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/profile', component: ProfilePage },
    { path: '/photos', component: PhotosPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router