<template>
    <h4> Options - {{o_firstName}} </h4>
    <h4> Composition - {{c_firstName}} </h4> <!-- Deepak -->
    <h4> Composition - {{greet}} </h4> <!-- Hello Daniel -->
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Data',
    data(){
        return {
            o_firstName: 'Deepak' // Options API
        }
    },
    setup(){
        const c_firstName = ref('Daniel'); // Composition API
        console.log(c_firstName.value); // Daniel
        const greet = `Hello ${c_firstName.value}`;
        c_firstName.value = 'Deepak';
        return {
            c_firstName,
            greet
        }
    },
}
</script>

<style>

</style>
