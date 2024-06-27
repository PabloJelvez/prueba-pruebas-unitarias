import { createRouter, createWebHistory } from "vue-router"
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import ContadorTest from "@/components/ContadorTest.vue";

describe("ContadorTest.vue", () => {
    const store = createStore();

  test('Probando la existencia del componente ContadorTest', async () => {
  
    const router = createRouter({
        history: createWebHistory(),
        routes: [{
            path: "/contador",
            name: "contador",
            component: ContadorTest
        }]
    }) 
    router.push('/contador')
    await router.isReady()
    const wrapper = mount(ContadorTest, {
        global: {
            plugins: [router, store]
        }
    })
    expect(wrapper.findComponent(ContadorTest).exists()).toBe(true)
})
});
