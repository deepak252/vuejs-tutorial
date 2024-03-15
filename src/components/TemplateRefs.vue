<template>
    <input type="text" ref="inputRef"/>
</template>

<script>

export default {
    name: 'TemplateRefs',
    mounted(){
        this.$refs.inputRef.focus();
    }
}
</script>

<style>
</style>
