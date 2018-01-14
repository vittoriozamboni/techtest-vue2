<template>
  <modal class="modal post-form"
    v-bind:show="entryModalFormVisible"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage Post</h1>
    <div slot="body">

      <form-title entityName="Post" :entryId="formEntry.id"></form-title>

      <form-errors :errorsList="formErrors" v-if="formErrors !== null"></form-errors>

      <form-field label="Title">
        <input slot="field" class="input is-small" v-model="formEntry.title" type="text" placeholder="Title of post">
      </form-field>

      <form-field label="Category">
        <div slot="field" class="select is-small is-fullwidth">
          <select v-model="formEntry.category">
            <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
          </select>
        </div>
      </form-field>

      <form-field label="Social Media">
        <div slot="field" class="select is-small is-fullwidth">
          <select v-model="formEntry.social_media">
            <option v-for="socialMed in socialMedia" :value="socialMed.id" :key="socialMed.id">{{ socialMed.name }}</option>
          </select>
        </div>
      </form-field>

      <form-field label="Content Types">
        <div slot="field" class="select is-multiple is-small is-fullwidth">
          <select multiple size="4" v-model="formEntry.content_types">
            <option v-for="contentType in contentTypes" :value="contentType.id" :key="contentType.id">{{ contentType.name }}</option>
          </select>
        </div>
      </form-field>

      <form-field label="Content">
        <textarea slot="field" class="textarea" v-model="formEntry.content" placeholder="Insert long content here"></textarea>
      </form-field>

      <form-field label="Created By">
        <div slot="field" class="select is-small is-fullwidth">
          <select :disabled="formEntry.id" v-model="formEntry.created_by">
            <option v-for="user in users" :value="user.id" :key="user.id">{{ user.full_name }}</option>
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
import FormErrors from '@/components/administration/formErrors';
import { PostEntity as EntityClass } from '@/models/post';
import Modal from '@/components/modal';


export default {
  name: 'post-edit-modal',
  props: ['entryModalFormVisible', 'formEntry'],
  components: {
    Modal,
    FormField,
    FormTitle,
    FormErrors
  },
  data () {
    return {
      formErrors: null
    };
  },
  computed: {
    categories: function () { return this.$store.state.categories },
    contentTypes: function () { return this.$store.state.contentTypes },
    socialMedia: function () { return this.$store.state.socialMedia },
    users: function () { return this.$store.state.users },
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideEntryFormModal', { fetchData });
    },
    saveEntry: function () {
      this.formErrors = null;

      const entity = new EntityClass();
      return entity.save(this.formEntry).then(response => {
        this.hideModal(true);
      }).catch(response => {
        this.formErrors = response.data;
      });
    },

  }
};
</script>

