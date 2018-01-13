<template>
  <div class="tile is-primary is-child notification is-4">
    <h3>{{ category.name }}</h3>
    <p>Id: {{ category.id }}</p>
  </div>    
</template>

<script>

export default {
  name: 'category',
  props: ['category']
};

</script>