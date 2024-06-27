import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

describe('HomeView.vue', () => {
    test('Probando la existencia de la vista HomeView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: "/",
                name: "home",
                component: HomeView
            }]
        }) 
        router.push('/')
        await router.isReady()
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })
})