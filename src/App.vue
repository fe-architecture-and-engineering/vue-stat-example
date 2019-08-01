<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png"
      v-stat:click="{event:'click',element:'logo'}">
    <div class="btn__container">
      <button 
        v-stat:click="{event:'click',element:'button'}">Into the new world</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn__container{
  margin-top: 20px;
}
button{
  width: 180px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
</style>
