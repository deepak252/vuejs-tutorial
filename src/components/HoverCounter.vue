<template>
    <div>
        <h3 @mouseover ="incrementCount">
            HoverCounter - {{count}}
        </h3>
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
