<template>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <slot name="actions"></slot>
        </div>
      </div>
    </nav>

</template>

<script>
export default {
  name: 'page-header',
  props: ['title']
};
</script>
