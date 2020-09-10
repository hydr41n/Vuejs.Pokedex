<template>
  <div class="column is-4">
    <div class="box">
      <div class="content">
        <figure class="image is-square">
          <img :src="pokeurl+pokemonid(pokedata.url)">
        </figure>
      </div>
      <div class="content">
          <p class="title is-size-1-mobile has-text-centered is-capitalized">{{pokedata.name}}</p>
      </div>
    </div>    
  </div> 
</template>


<script>
export default {
  name: 'Pokelist',
  props:['pokedata'],
  data (){
    return{      
      pokeurl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
    }
  },
  methods:{
    pokemonid :(thePath)=>{
      return thePath.substring(thePath.lastIndexOf('/pokemon/')+9).replace(/\//g,'')+'.svg'
    }
  }
};
</script>