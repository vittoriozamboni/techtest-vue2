<template>
  <div class="content notification is-danger is-size-7">
    <h3 class="title is-6">Errors</h3>
    <p>
      Please, fix all the errors before save:
      <ul>
        <li v-for="(fieldErrors, fieldName, index) in errorsList" :key="index">
          <strong class="field-name">{{ fieldName.replace('_', ' ') }}</strong>: {{ fieldErrors.join('; ') }}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'form-errors',
  props: ['errorsList']
};
</script>

<style lang="scss">
.field-name {
  text-transform: capitalize;
}
</style>