<template>
    <div>
        <h2>This is a Popup</h2>
        <button @click="$emit('close', 'Popup Closed')">Close Popup</button>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    emits: ['close']
}
</script>

<style>

</style>