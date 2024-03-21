<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName"/>
        <input type="text" placeholder="Last Name" v-model="lastName"/>
        <!-- <input type="text" placeholder="First Name" v-model="refFirstName"/>
        <input type="text" placeholder="Last Name" v-model="refLastName"/>
        <h3>RefFullname - {{refFullName}} </h3> -->

        <!-- <input type="text" placeholder="First Name" v-model="fName"/>
        <input type="text" placeholder="Last Name" v-model="lName"/>
        <h3>ReactiveFullname - {{reactiveFullName}} </h3> -->

    </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    name: 'Watch',
    setup(){
        const firstName =  ref('')
        const lastName =  ref('')

        // watch(firstName, (newValue, oldValue)=>{
        //     console.log({newValue, oldValue});
        // })
        watch([firstName, lastName], (newValue, oldValue)=>{
            // console.log({newValue, oldValue});
            console.log("firstName newValue - ", newValue[0]);
            console.log("firstName oldValue - ", oldValue[0]);
            console.log("lastName newValue - ", newValue[1]);
            console.log("lastName oldValue - ", oldValue[1]);
        },{
            immediate: true
        })

        return {
            firstName, 
            lastName
        }
    }
}
</script>

<style scoped>

</style>
