<template>
  <div class="container">
    <page-header title="Social Media">
      <div slot="actions">
        <a class="button is-small is-success" @click="addEntry()">
          <span class="icon"><i class="fa fa-plus"></i></span>
          <span>Add</span>
        </a>
      </div>
    </page-header>

    <table class="table table-admin is-striped is-hoverable is-fullwidth is-narrow">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Website</th>
          <th>Owner</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <td>{{ entry.id }}</td>
          <td>{{ entry.name }}</td>
          <td>{{ entry.website }}</td>
          <td>{{ entry.ownerDisplay }}</td>
          <td>
            <a class="button is-small is-primary is-outlined" @click="editEntry(entry)">
              <i class="fa fa-edit"></i>
            </a>
            <a class="button is-small is-danger is-outlined" @click="deleteEntry(entry)">
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <p>{{ entriesCount }} total entries</p>

    <social-media-edit-modal
      v-bind:entryModalFormVisible="entryModalFormVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryFormModal="hideEntryFormModal"
    ></social-media-edit-modal>

    <social-media-delete-modal
      v-bind:entryModalDeleteConfirmVisible="entryModalDeleteConfirmVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryDeleteConfirmModal="hideEntryDeleteConfirmModal"
    ></social-media-delete-modal>

  </div>
</template>

<script>


import { SocialMediaEntity as EntityClass } from '@/models/socialMedia';
import pageHeader from '@/components/administration/pageHeader';
import { FormUtils } from '@/components/administration/utils';

import socialMediaEditModal from './socialMediaEditModal';
import socialMediaDeleteModal from './socialMediaDeleteModal';

export default {
  name: 'social-media',
  data () {
    return {
      entryModalFormVisible: false,
      entryModalDeleteConfirmVisible: false,
      formEntry: () => {},
    };
  },
  components: {
    pageHeader,
    socialMediaEditModal,
    socialMediaDeleteModal
  },
  created () {
    if (this.$store.state.socialMedia === null) {
      this.fetchData();
    }
  },
  computed: {
    entries: function () { return this.$store.state.socialMedia },
    entriesCount: function () { return this.entries ? this.entries.length : 0 },
  },
  methods: {
    fetchData () {
      new EntityClass({ vm: this }).fetch();
    },
    // ADD / EDIT
    addEntry: function () {
      this.editEntry();
    },
    editEntry: function (entry) {
      FormUtils.editEntry(this, { entry, emptyEntry: EntityClass.emptyEntry() });
      this.entryModalFormVisible = true;
    },
    hideEntryFormModal: function ({ fetchData }) {
      this.entryModalFormVisible = false;
      FormUtils.closeModalForm(this, { fetchData });
    },
    // DELETE
    deleteEntry: function (entry) {
      this.entryModalDeleteConfirmVisible = true;
      this.formEntry = Object.assign({}, entry);
    },
    hideEntryDeleteConfirmModal: function ({ fetchData }) {
      this.entryModalDeleteConfirmVisible = false;
      FormUtils.closeModalForm(this, { fetchData });
    }
  }
};
</script>
