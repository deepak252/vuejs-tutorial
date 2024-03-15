<template>
    <h3>List 1</h3>
    <NameList>
        <template v-slot:default="slotProps">
                {{slotProps.firstName}}, {{slotProps.lastName}}
        </template>
    </NameList>
    <h3>List 2</h3>
    <NameList>
        <template v-slot:default="slotProps">
                {{slotProps.lastName}}, {{slotProps.firstName}}
        </template>
    </NameList>
    <h3>List 3</h3>
    <NameList>
        <template v-slot:default="slotProps">
                {{slotProps.firstName}}
        </template>
    </NameList>
</template>
<script>
import NameList from'./components/NameList.vue'

export default {
    name: 'App',
    components: {
        NameList
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
