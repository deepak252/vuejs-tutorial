<template>
    <p v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </p>
</template>

<script>
export default {
    name: 'NameList',
    data(){
        return {
            names: [
                {
                    firstName: 'Bruce',
                    lastName: 'Wayne'
                },
                {
                    firstName: 'Clark',
                    lastName: 'Kent'
                },
                {
                    firstName: 'Princess',
                    lastName: 'Diana'
                }
            ]
        }
    }
}
</script>

<style>

</style>