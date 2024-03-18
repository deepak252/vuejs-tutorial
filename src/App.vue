<template>
    <div>
        <Data v-show="false"/>
        <Methods v-show="false"/>
        <VModel/>
    </div>
</template>

<script>
import Data from './components/Data.vue'
import Methods from './components/Methods.vue'
import VModel from './components/VModel.vue'

export default {
    name: 'App',
    components: {
        Data,
        Methods,
        VModel,
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
