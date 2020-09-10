<template>
  <div id="app">   
    <Pokesearch></Pokesearch>
      <div class="container">
        <div class="columns is-centered is-multiline is-half-desktop is-one-quarter-widescreen is-one-quarter-fullhd">    
          <Pokelist  v-for="PM_result in PM_results" :key="PM_result.id" :pokedata="PM_result"></Pokelist>
        </div>
      </div>
  </div>
</template>

<script>

import Pokesearch from './components/Pokesearch.vue';
import Pokelist from './components/Pokelist.vue';

const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    Pokelist,
    Pokesearch
  },
  data () {
    return {
      PM_results:[],
      PM_count: 0,
      PM_next: '',
      PM_prev: ''
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/', {
        params: {
          offset: 0,
          limit: 9
        }
      })
      .then(res => (
        this.PM_count = res.data.count,
        this.PM_next = res.data.next,
        this.PM_prev = res.data.prev,
        this.PM_name = res.data.name,
        this.PM_url = res.data.url,
        this.PM_results = res.data.results
      ))
      .catch(function (error) {
        console.log(error);
      })
  },

};
</script>
