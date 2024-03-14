<template>
    <!-- <div class="card"> {{content}} </div> -->
    <!-- <div class="card"> <slot>Default Content</slot> </div> -->
    <div class="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
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
    box-shadow: 1px 1px 4px 2px rgba(168, 168, 168, 0.404);
    min-width: 100px;
    margin: 8px;
}
</style>