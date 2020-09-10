<template>
 <section class="section">
	<div class="content">
		<p class="control has-icons-left field">
			<input v-model="searchPokemon" class="input is-large is-danger is-focused is-rounded" type="text" placeholder="Search your Pokemon (currently limit to 20 pokemons for sample purposes)">
			<span class="icon is-large is-left">
				<font-awesome-icon class="has-text-danger" :icon="['fas', 'dot-circle']" />
			</span>
		</p>   		
	</div> 
  <div class="container">
    <div id="nav" class="columns is-centered is-multiline is-half-desktop is-one-quarter-widescreen is-one-quarter-fullhd">    
      <Pokelist v-for="PM_result in filterPokemon(PM_results)" :key="PM_result.id" :pokedata="PM_result"></Pokelist>
    </div>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import Pokelist from '@/components/Pokelist.vue'
const axios = require('axios').default;


export default {
  name: 'Pokedex',
  components: {
    Pokelist
  },
  data () {
    return {
      searchPokemon: '',
      PM_results:[]
    }
  },
  methods: {
    filterPokemon: function(pokemon) {
      var app = this;
      return pokemon.filter(function(preset) {
        let regex = new RegExp('(' + app.searchPokemon + ')', 'i');
        return preset.name.match(regex);
      })
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          offset: 0,
          limit: 20
        }
      })
      .then(res => (
        this.PM_results = res.data.results
      ))
      .catch(function (error) {
        console.log(error);
      })
  }

};
</script>
