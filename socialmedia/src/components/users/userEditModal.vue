<template>
  <modal class="modal user-form"
    v-bind:show="entryModalFormVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage User</h1>
    <div slot="body">

      <form-title entityName="User" :entryId="formEntry.id"></form-title>

      <form-field label="Username">
        <input slot="field" class="input is-small" v-model="formEntry.username" type="text" placeholder="Username (no special chars or spaces)">
      </form-field>

      <form-field label="First Name">
        <input slot="field" class="input is-small" v-model="formEntry.first_name" type="text" placeholder="First Name">
      </form-field>

      <form-field label="Last Name">
        <input slot="field" class="input is-small" v-model="formEntry.last_name" type="text" placeholder="Last Name">
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
import { UserEntity as EntityClass } from '@/models/user';
import Modal from '@/components/modal';


export default {
  name: 'user-edit-modal',
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

