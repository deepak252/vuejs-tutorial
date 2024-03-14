<template>
  <!-- <Greet name="Bruce" heroName="Batman"/> -->
  <!-- NOTE: Prefer using kebab-case for props in HTML and camelCase for the same in JS -->
  <Greet name="Bruce" hero-name="Batman"/>
  <Greet name="Clark" hero-name="Superman"/> <!-- Passing static values to props -->
  <Greet :name="name" :hero-name="name2"/> <!-- Passing dynamic values to props -->
</template>

<script>
import Greet from'./components/Greet.vue'

export default {
  name: 'App',
  components: {
    Greet
  },
  data(){
    return {
      name: 'Deepak',
      name2: 'D.C.'
    }
  }

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
