<template>
  <modal class="modal social-media-form"
    v-bind:show="entryModalFormVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Social Media</h1>
    <div slot="body">

      <form-title entityName="Social Media" :entryId="formEntry.id"></form-title>

      <form-field label="Name">
        <input slot="field" class="input is-small" v-model="formEntry.name" type="text" placeholder="Name of the entry">
      </form-field>

      <form-field label="Website">
        <input slot="field" class="input is-small" v-model="formEntry.website" type="text" placeholder="Website">
      </form-field>

      <form-field label="Owner">
        <div slot="field" class="select is-small is-fullwidth">
          <select v-model="formEntry.owner">
            <option v-for="owner in owners" :value="owner.id" :key="owner.id">{{ owner.name }}</option>
          </select>
        </div>
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
import { SocialMediaEntity as EntityClass } from '@/models/socialMedia';
import Modal from '@/components/modal';


export default {
  name: 'social-media-edit-modal',
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
  computed: {
    owners: function () { return this.$store.state.socialMediaOwners },
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideEntryFormModal', { fetchData });
    },
    saveEntry: function () {
      const entity = new EntityClass({ vm: this });
      return entity.save(this.formEntry).then(response => {
        this.hideModal(true);
      }, response => {
        this.hideModal();
      });
    },

  }
};
</script>

