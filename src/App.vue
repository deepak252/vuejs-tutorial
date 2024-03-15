<template>
    <div>
        <TemplateRefs />
    </div>
</template>

<script>
import TemplateRefs from './components/TemplateRefs.vue'
export default {
    name: 'App',
    components: {
        TemplateRefs
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
