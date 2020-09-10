<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Pokelist></Pokelist>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p></p>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';
import Pokelist from './components/Pokelist.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pokelist
  }
};
</script>
