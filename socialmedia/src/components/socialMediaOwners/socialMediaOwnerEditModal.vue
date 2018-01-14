<template>
  <modal class="modal social-media-owner-form"
    v-bind:show="entryModalFormVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Social Media Owner</h1>
    <div slot="body">

      <form-title entityName="Social Media Owner" :entryId="formEntry.id"></form-title>

      <form-field label="Name">
        <input slot="field" class="input is-small" v-model="formEntry.name" type="text" placeholder="Name of the entry">
      </form-field>

      <form-field label="Website">
        <input slot="field" class="input is-small" v-model="formEntry.website" type="text" placeholder="Website">
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
import { SocialMediaOwnerEntity as EntityClass } from '@/models/socialMediaOwner';
import Modal from '@/components/modal';


export default {
  name: 'social-media-owner-edit-modal',
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
      const entity = new EntityClass({ vm: this });
      entity.save(this.formEntry, response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },

  }
};
</script>

