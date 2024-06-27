import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";
import ContadorTest from "@/components/ContadorTest.vue";

describe("ContadorTest.vue", () => {
  const store = createStore({
    state: {
      contador: 0,
    },
    mutations: {
        INCREMENT(state){
            state.contador++;
          },
          DECREMENT(state){
            state.contador--;
          }
    },
    actions: {
        valueIncrement({commit}){
          commit("INCREMENT")
        },
        valueDecrement({commit}){
          commit("DECREMENT")
        }
      },
  }); // Crea una instancia de tu store
  test("debería tener un contador inicial en 0", () => {
    const wrapper = shallowMount(ContadorTest, {
      global: {
        plugins: [store], // Inyecta el store en el componente
      },
    });
    const value = wrapper.find(".counterValue").text();
    expect(value).toBe("El contador esta en: 0");
  });
  test('Incrementar en 1 el valor del contador', async () => {
    const wrapper = shallowMount(ContadorTest, {
        global: {
            plugins: [store]
        }
    })
    expect(wrapper.find('.counterValue').text()).toBe("El contador esta en: 0");
    await wrapper.find('.incrementButton').trigger('click')
    expect(wrapper.find('.counterValue').text()).toBe("El contador esta en: 1");

  });
  test('Disminuir en 1 el valor del contador', async () => {
    const wrapper = shallowMount(ContadorTest, {
        global: {
            plugins: [store]
        }
    })
    expect(wrapper.find('.counterValue').text()).toBe("El contador esta en: 1");
    await wrapper.find('.decrementButton').trigger('click')
    expect(wrapper.find('.counterValue').text()).toBe("El contador esta en: 0");

  });

});
