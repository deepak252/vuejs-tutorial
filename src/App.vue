<template>
    <h2>Parent H2</h2>
    <!-- <ChildStyles /> -->
    <ChildStyles>
        <h2>Child H2</h2> 
    </ChildStyles>
</template>
<script>
import ChildStyles from'./components/ChildStyles.vue'

export default {
    name: 'App',
    components: {
        ChildStyles
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

h2{
    color: orange;
}

</style>
