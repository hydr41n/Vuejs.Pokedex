require('@/assets/main.scss');

import Vue from 'vue'
import App from './App.vue'
const axios = require('axios').default;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data () {
    return {
      pokemonlist: null
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/', {
        params: {
          offset: 0,
          limit: 20
        }
      })
      .then(res => (console.log(res.data.results)))
      .catch(function (error) {
        console.log(error);
      })
  }
}).$mount('#app')
