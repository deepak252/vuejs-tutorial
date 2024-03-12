<template>
  <div>Hello {{name}}</div> <!-- Method 1 (mustache syntax {{}}) -->
  <div v-text="age"></div> <!-- Method 2 (v-text directive: replaces the entire text content) -->
  <div v-html="designation"></div> <!-- (v-html directive : Binds Html) -->
  <div :id="headingId">ABCD</div> <!-- Binding to id attribute -->
  <button :disabled="isDisabled">Click</button> <!-- Binding to disabled attribute -->
  <p class="underline" :class="status">ACTIVE</p> <!-- Binding Static and Dynamic Classes -->
  <p :class="isLive && 'success'">LIVE</p>
  <p :class="!isLive ? 'success' : 'danger'">OFFLINE</p>
  <p :class="['success', 'underline']">Array Binding Class</p>
  <p :class="{
    success: isLive,
    'underline': isLive,
  }">Object Binding Class</p>

  <p :style="{
    color: highlightColor,
    'font-size': paraSize+'px',  
  }">Inline Style</p> <!-- OR, fontSize: paraSize+'px' -->
  <p :style="paraStyle">Style Object</p>
  <p :style="[paraStyle, borderStyle]">Style Object</p>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      name: 'Deepak',
      age: 32,
      designation: '<b>Software Developer</b>',
      headingId:'heading',
      isDisabled: true,
      status: 'success',
      isLive: true,
      highlightColor: 'purple',
      paraSize: 24,
      paraStyle: {
        color: 'orange',
        fontWeight: 'bold'
      },
      borderStyle: {
        border: '1px solid black'
      }
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

.success{
  color: green;
}

.danger{
  color: red;
}

.underline{
  text-decoration: underline;
}
</style>
