<template>
    <div>
        <h3>Hero name - {{heroName}} </h3>
        <input type="text" v-model="heroName"/>
        <h3>User - {{fName}} {{lName}} </h3>
        <input type="text" v-model="fName"/>
        <input type="text" v-model="lName"/>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    name: 'VModel',
    setup(){
        const heroName = ref('');

        const state = reactive({
            fName: 'Deepak',
            lName: ''
        });
        
        return {
            heroName,
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>

</style>