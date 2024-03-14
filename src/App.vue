<template>
  <!-- <Greet name="Bruce" heroName="Batman"/> -->
  <!-- NOTE: Prefer using kebab-case for props in HTML and camelCase for the same in JS -->
  <!-- <Greet name="Bruce" hero-name="Batman"/>
  <Greet name="Clark" hero-name="Superman"/> 
  <Greet :name="name" :hero-name="name2"/> -->
  <!-- <Article :likes="8"/>
  <Article title="Title 1" :likes="12"/>
  <Article id="article-2" :title="'Title 2'" content="Lorem Ipsum" :likes="12"/> -->
  <h2>App Username - {{name}}</h2>
  <ComponentA />
</template>

<script>
// import Greet from'./components/Greet.vue'
// import Article from'./components/Article.vue'
import ComponentA from'./components/ComponentA.vue'

export default {
  name: 'App',
  components: {
    // Greet,
    // Article,
    ComponentA
  },
  data(){
    return {
      name: 'Deepak',
      name2: 'D.C.'
    }
  },
  // provide: {
  //   username: 'Deepak'
  // }
  provide(){
    return {
      username: this.name
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
