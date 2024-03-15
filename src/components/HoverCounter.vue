<template>
    <div>
        <h3 @mouseover ="incrementCount">
            HoverCounter - {{count}}
        </h3>
    </div>
</template>

<script>
import CounterMixin from '../mixin/counter.js' 

export default {
    name: 'HoverCounter',
    mixins: [CounterMixin]
}
</script>

<style>
</style>
