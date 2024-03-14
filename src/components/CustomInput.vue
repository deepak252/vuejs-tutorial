<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        modelValue: String
    }
}
</script>

<style scoped>
input{
    padding: 8px;
    border-radius: 12px;

}
</style>