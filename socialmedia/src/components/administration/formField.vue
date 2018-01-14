<template>
  <div class="field is-horizontal">
    <div class="field-label is-small">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <slot name="field"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-field',
  props: ['label']
};
</script>
