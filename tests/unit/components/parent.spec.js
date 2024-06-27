import { shallowMount } from '@vue/test-utils';
import ChildVue from '@/components/Child.vue';
import ParentVue from '@/components/Parent.vue';

describe('ParentVue', () => {
    test('Debería enviar texto al componente padre', async () => {
        const wrapper = shallowMount(ChildVue);
        const texto = 'Texto de prueba';
    
        await wrapper.get('[data-test="inputText"]').setValue(texto);
        await wrapper.get('[data-test="form"]').trigger('submit');
    
        expect(wrapper.emitted('sendText')).toBeTruthy();
        expect(wrapper.emitted('sendText')[0][0]).toBe(texto);
    });
    
    test('Debería recibir texto del componente hijo', async () => {
        const wrapper = shallowMount(ParentVue);
        const textoEnviado = 'Texto de prueba';

        // Se simula el envío de texto desde el componente hijo
        await wrapper.findComponent(ChildVue).vm.$emit('sendText', textoEnviado);

        // Verificamos si el texto recibido se muestra en el componente padre
        expect(wrapper.text()).toContain(`Texto recibido: ${textoEnviado}`);
    });
});
