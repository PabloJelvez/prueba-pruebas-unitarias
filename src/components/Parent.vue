<template>
<div class="Parent">
    <header>
        <h1>Componente Padre</h1>
    </header>

    <main class="container">
        <section>
            <p>Texto recibido: {{ receivedText }}</p>
            <ChildVue @sendText="showText" />
        </section>
    </main>

</div>

</template>

<script>

import ChildVue from "../components/Child.vue"

export default{
    name: "ParentVue",
    components: {
        ChildVue
    },
    data(){
        return{
            receivedText: ""
        }
    },
    methods: {
        showText(text){
            this.receivedText = text;
        }
    } 
}
</script>

<style scoped lang="scss">

</style>