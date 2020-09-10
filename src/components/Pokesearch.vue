<template>
  <div class="column">
    <p class="control has-icons-left">
    <input class="input is-large is-danger is-focused is-rounded" type="text" placeholder="Search your Pokemon">
    <span class="icon is-large is-left">
      <font-awesome-icon :icon="['fas', 'dot-circle']" />
    </span>
	</p>    
  </div> 
</template>
<script>
export default {
  name: 'Pokesearch'
};
</script>
