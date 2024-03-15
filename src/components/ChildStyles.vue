<template>
    <div>
        <!-- <h2>Child H2</h2> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ChildStyles',
}
</script>

<style scoped>

h2{
    color: red;
}

</style>