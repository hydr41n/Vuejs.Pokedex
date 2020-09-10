<template>
  <div class="column is-4">
    <div class="box">
      <button class="delete is-large" v-on:click="back()"></button>
      <div class="content">
        <figure class="image is-square">
          <img :src="PM_image">
        </figure>
      </div>
      <div class="content">
          <p class="title is-size-1-mobile has-text-centered is-capitalized">{{PM_name}}</p>
      </div>
    </div> 
  </div> 
</template>


<script>
import router from '../router'
const axios = require('axios').default;

export default {
  name: 'Pokesingle',
  data(){
    return{
      PM_name:null,
      PM_image: null
    }
  },
  created () {    
    if(this.$route.query.name) {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/'+this.$route.query.name)
        .then(res => { 
          this.PM_name = res.data.name,
          this.PM_image = res.data.sprites.other['dream_world'].front_default
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      else{
        this.back()
      }
  },
  methods:{
    back :()=>{router.go(-1)}
  }
};
</script>