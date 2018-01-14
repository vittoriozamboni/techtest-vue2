<template>
  <div class="container">
    <page-header title="Content Types">
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <td>{{ entry.id }}</td>
          <td>{{ entry.name }}</td>
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

    <content-type-edit-modal
      v-bind:entryModalFormVisible="entryModalFormVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryFormModal="hideEntryFormModal"
    ></content-type-edit-modal>

    <content-type-delete-modal
      v-bind:entryModalDeleteConfirmVisible="entryModalDeleteConfirmVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryDeleteConfirmModal="hideEntryDeleteConfirmModal"
    ></content-type-delete-modal>

  </div>
</template>

<script>


import { ContentTypeEntity as EntityClass } from '@/models/contentType';
import pageHeader from '@/components/administration/pageHeader';
import { FormUtils } from '@/components/administration/utils';

import contentTypeEditModal from './contentTypeEditModal';
import contentTypeDeleteModal from './contentTypeDeleteModal';

export default {
  name: 'content-types',
  data () {
    return {
      entryModalFormVisible: false,
      entryModalDeleteConfirmVisible: false,
      formEntry: () => {},
    };
  },
  components: {
    pageHeader,
    contentTypeEditModal,
    contentTypeDeleteModal
  },
  created () {
    if (this.$store.state.contentTypes === null) {
      this.fetchData();
    }
  },
  computed: {
    entries: function () { return this.$store.state.contentTypes },
    entriesCount: function () { return this.entries ? this.entries.length : 0 },
  },
  methods: {
    fetchData () {
      const entity = new EntityClass({ vm: this });
      return entity.fetch();
    },
    // ADD / EDIT
    addEntry: function () {
      this.editEntry();
    },
    editEntry: function (contentType) {
      FormUtils.editEntry(this, { entry: contentType, emptyEntry: EntityClass.emptyEntry() });
      this.entryModalFormVisible = true;
    },
    hideEntryFormModal: function ({ fetchData }) {
      this.entryModalFormVisible = false;
      FormUtils.closeModalForm(this, { fetchData });
    },
    // DELETE
    deleteEntry: function (contentType) {
      this.entryModalDeleteConfirmVisible = true;
      this.formEntry = Object.assign({}, contentType);
    },
    hideEntryDeleteConfirmModal: function ({ fetchData }) {
      this.entryModalDeleteConfirmVisible = false;
      FormUtils.closeModalForm(this, { fetchData });
    }
  }
};
</script>
