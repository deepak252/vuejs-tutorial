<template>
    <div>
        <!-- <h4> IsLoggedIn - {{isLoggedIn}} </h4> 
        <h4> User - {{greet}} </h4>
        <h4> User - {{userInfoState}} </h4> -->
        <h4> IsLoggedIn - {{isLoggedIn}} </h4> 
        <h4>User - {{state.firstName}} {{state.lastName}}</h4>
        <h4>User - {{firstName}} {{lastName}}</h4>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
    name: 'Data',
    data(){
        return {
            o_firstName: 'Deepak' // Options API
        }
    },
    setup(){
        const isLoggedIn = ref(true); 
        const state = reactive({
            firstName: 'Deepak',
            lastName: 'Chaurasiya'
        });
        setTimeout(()=>{
            isLoggedIn.value = false;
            state.firstName = 'Bruce';
            state.lastName = 'Wayne';
            console.log(state);
        },2000)

        // return {
        //     isLoggedIn,
        //     firstName: state.firstName, // Bug
        //     lastName: state.lastName, // // Bug
        // }

        return {
            isLoggedIn,
            state,
            ...toRefs(state)
        }

        // const greet = `Hello ${userInfoState.firstName} ${userInfoState.lastName}`;
        // setTimeout(()=>{
        //     isLoggedIn.value = false;
        //     userInfoState.firstName = "Bruce"
        // },2000)

        // return {
        //     isLoggedIn,
        //     userInfoState,
        //     greet
        // }
    },
}
</script>

<style>

</style>
