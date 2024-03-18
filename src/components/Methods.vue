<template>
    <div>
        <h3>Count - {{count}} </h3>
        <button @click="incrementCount">Increment</button>
        <h3>User - {{fName}} {{lName}} </h3>
        <button @click="changeName">Change Name</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    name: 'Methods',
    setup(){
        const count = ref(0);
        function incrementCount(){
            count.value++;
        }

        const state = reactive({
            fName: 'Deepak',
            lName: 'Chaurasiya'
        });
        function changeName(){
            state.fName = 'Bruce';
            state.lName = 'Wayne';
        }
        return {
            count,
            incrementCount,
            ...toRefs(state),
            changeName
        }
    } 
}
</script>

<style scoped>

</style>