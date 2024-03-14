<template>
    <p>Input - {{name}}</p>
    <CustomInput v-model="name"/>
</template>
<script>
import CustomInput from'./components/CustomInput.vue'

export default {
    name: 'App',
    components: {
        CustomInput
    },
    data(){
        return {
            name: ''
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
