<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Pokelist></Pokelist>
    <p></p>
  </div>
</template>

<script>


import Pokelist from './components/Pokelist.vue';

export default {
  name: 'App',
  components: {
    Pokelist
  }
};
</script>
