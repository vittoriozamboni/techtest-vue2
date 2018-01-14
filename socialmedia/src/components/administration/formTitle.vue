<template>
  <div v-if="entryId" class="title is-5" >Edit {{ entityName }} (id: {{ entryId }})</div>
  <div v-else class="title is-5" >Add {{ entityName }}</div>
</template>

<script>
export default {
  name: 'form-title',
  props: ['entityName', 'entryId']
};
</script>
