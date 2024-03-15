<template>
    <div>
        <h3>
            ClickCounter - {{count}}
        </h3>
        <button @click="incrementCount">Increment</button>
    </div>
</template>

<script>
import CounterMixin from '../mixin/counter.js' 

export default {
    name: 'ClickCounter',
    mixins: [CounterMixin]
}
</script>

<style>
</style>
