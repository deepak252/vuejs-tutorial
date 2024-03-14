<template>
    <!-- <div class="card"> {{content}} </div> -->
    <div class="card"> <slot>Default Content</slot> </div>
</template>

<script>
export default {
    name: 'Card',
    // props: ['content']
}
</script>

<style scoped>
.card{
    display: inline-block;
    padding: 12px;
    box-shadow: 1px 1px 4px gray;
    min-width: 100px;
}
</style>