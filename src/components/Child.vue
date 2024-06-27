<template>
    <div class="Child">
        <header>
            <h1>Componente Hijo</h1>
        </header>
    
        <main class="container">
            <section>
                <form @submit.prevent="sendText" data-test="form" >
                    <div>
                        <label for="inputText" class="form-label">Ingrese un texto</label>
                        <input class="form-control" type="text" name="inputText" id="inputText" v-model="text" data-test="inputText">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-success m-2 p-2" >Enviar texto</button>
                    </div>
                </form>
            </section>

        </main>
    
    </div>
    
    </template>
    
    <script>
    export default{
        name: "ChildVue",
        data(){
            return{
                text: ""
            }
        },
        methods: {
            sendText(){
                this.$emit("sendText", this.text)
                this.text = ""
            }
        }
    }
    </script>
    
    <style scoped lang="scss">
    
    </style>