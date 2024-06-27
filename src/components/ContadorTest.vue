<template>
<header>
    <h1>Vista Contador</h1>
</header>

<main class="container" >
    <div class="counter">
    <p class="counterValue" id="counterValue" >El contador esta en: {{ contador }}</p>
    <button class="incrementButton btn btn-primary m-2 p-2"  @click="valueIncrement" >Incrementar</button>
    <button class="decrementButton btn btn-primary m-2 p-2"  @click="valueDecrement" >Disminuir</button>

</div>
</main>


</template>

<script>

import { mapActions, mapState} from "vuex"
export default{
    name: "ContadorTest",
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState(["contador"])
    },
    methods: {
        ...mapActions(["valueIncrement", "valueDecrement"])
    }
}

</script>

<style scoped lang="scss">
.btn{
    width: 150px;
}
</style>