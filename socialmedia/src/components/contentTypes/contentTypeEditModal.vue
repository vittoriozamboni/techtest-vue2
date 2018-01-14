<template>
  <modal class="modal content-type-form"
    v-bind:show="entryModalFormVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Content Type</h1>
    <div slot="body">

      <form-title entityName="Content Type" :entryId="formEntry.id"></form-title>

      <form-field label="Name">
        <input slot="field" class="input is-small" v-model="formEntry.name" type="text" placeholder="Name of the entry">
      </form-field>

    </div>
    <div slot="footer">
      <button class="button is-success" @click="saveEntry()">Save changes</button>
      <button class="button" @click="hideModal()">Cancel</button>
    </div>
  </modal>
</template>

<script>

import FormField from '@/components/administration/formField';
import FormTitle from '@/components/administration/formTitle';
import { ContentTypeEntity as EntityClass } from '@/models/contentType';
import Modal from '@/components/modal';


export default {
  name: 'content-type-edit-modal',
  props: ['entryModalFormVisible', 'formEntry'],
  components: {
    Modal,
    FormField,
    FormTitle
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideEntryFormModal', { fetchData });
    },
    saveEntry: function () {
      const entity = new EntityClass();
      return entity.save(this.formEntry).then(response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },

  }
};
</script>

