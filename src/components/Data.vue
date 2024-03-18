<template>
    <!-- <h4> Options - {{o_firstName}} </h4> -->
    <h4> IsLoggedIn - {{isLoggedIn}} </h4> 
    <h4> User - {{greet}} </h4>
    <h4> User - {{userInfoState}} </h4>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
    name: 'Data',
    data(){
        return {
            o_firstName: 'Deepak' // Options API
        }
    },
    setup(){
        const isLoggedIn = ref(true); 
        const userInfoState = reactive({
            firstName: 'Deepak',
            lastName: 'Chaurasiya',
            email: 'deepak@gmail.com'
        }); 
        const greet = `Hello ${userInfoState.firstName} ${userInfoState.lastName}`;
        return {
            isLoggedIn,
            userInfoState,
            greet
        }
    },
}
</script>

<style>

</style>
