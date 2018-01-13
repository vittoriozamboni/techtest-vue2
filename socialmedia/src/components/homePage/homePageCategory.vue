<template>
  <div class="tile is-parent">
    <article class="tile is-primary is-child notification">
      <h3>{{ category.name }}</h3>
      <p>Id: {{ category.id }}</p>
    </article>
  </div>
</template>

<script>

export default {
  name: 'home-page-category',
  props: ['category']
};

</script>