<template>
  <button @click="showPopup=!showPopup">Toggle Popup</button>
  <!-- <Popup v-show="showPopup" @close="showPopup=false"/> -->
  <Popup v-show="showPopup" @close="closePopup"/>
</template>
<script>
import Popup from'./components/Popup.vue'

export default {
  name: 'App',
  components: {
    Popup
  },
  data(){
    return {
      showPopup: false
    }
  },
  methods: {
    closePopup(payload){
      console.log({payload});
      this.showPopup=false
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
