<template>
    <div>
        <h2>ComponentB Username- {{username}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ComponentB',
    inject: ['username']
}
</script>

<style scoped>

</style>