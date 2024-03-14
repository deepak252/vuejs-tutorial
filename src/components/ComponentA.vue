<template>
    <div>
        <h2>ComponentA Username- {{username}}</h2>
        <ComponentB />
    </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    name: 'ComponentA',
    components: {
        ComponentB
    },
    inject: ['username']
}
</script>

<style scoped>

</style>