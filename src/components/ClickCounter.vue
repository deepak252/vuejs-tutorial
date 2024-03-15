<template>
    <div>
        <h3>
            ClickCounter - {{count}}
        </h3>
        <button @click="incrementCount">Increment</button>
    </div>
</template>

<script>

export default {
    name: 'ClickCounter',
    data(){
        return {
            count: 0
        }
    },
    methods: {
        incrementCount(){
            this.count++;
        }
    }
}
</script>

<style>
</style>
