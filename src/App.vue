<template>
    <div>
        <Data v-show="false"/>
        <Methods v-show="false"/>
        <VModel v-show="false"/>
        <Computed v-show="false"/>
        <Watch />
    </div>
</template>

<script>
import Data from './components/Data.vue'
import Methods from './components/Methods.vue'
import VModel from './components/VModel.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'

export default {
    name: 'App',
    components: {
        Data,
        Methods,
        VModel,
        Computed,
        Watch
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
