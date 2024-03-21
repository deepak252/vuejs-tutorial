<template>
    <div>
        <input type="text" placeholder="First Name" v-model="refFirstName"/>
        <input type="text" placeholder="Last Name" v-model="refLastName"/>
        <h3>RefFullname - {{refFullName}} </h3>

        <input type="text" placeholder="First Name" v-model="fName"/>
        <input type="text" placeholder="Last Name" v-model="lName"/>
        <h3>ReactiveFullname - {{reactiveFullName}} </h3>

    </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue'
export default {
    name: 'Computed',
    setup(){
        const refFirstName =  ref('')
        const refLastName =  ref('')
        const refFullName = computed(function(){
            return `${refFirstName.value} ${refLastName.value}`
        })
        const state = reactive({
            fName: 'Deepak',
            lName: ''
        });

        const reactiveFullName = computed(function (){
            return `${state.fName} ${state.lName}`
        })
        
        return {
            refFirstName, 
            refLastName,
            ...toRefs(state),
            refFullName,
            reactiveFullName
        }
    }
}
</script>

<style scoped>

</style>