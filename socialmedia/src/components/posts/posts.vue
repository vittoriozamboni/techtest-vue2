<template>
  <div class="container">
    <page-header title="Posts">
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
          <th>Title</th>
          <th>Created By</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <td>{{ entry.id }}</td>
          <td>{{ entry.title }}</td>
          <td>{{ entry._display.created_by }}</td>
          <td>
            <a class="button is-small is-link is-outlined"
              @click="viewDetailsEntry(entry)"
            >
              <i class="fa fa-file-text-o"></i>
            </a>
            <a class="button is-small is-primary is-outlined"
              @click="editEntry(entry)"
            >
              <i class="fa fa-edit"></i>
            </a>
            <a class="button is-small is-danger is-outlined"
              @click="deleteEntry(entry)"
            >
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <p>{{ entriesCount }} total entries</p>

    <post-edit-modal
      v-bind:entryModalFormVisible="entryModalFormVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryFormModal="hideEntryFormModal"
    ></post-edit-modal>

    <post-delete-modal
      v-bind:entryModalDeleteConfirmVisible="entryModalDeleteConfirmVisible"
      v-bind:formEntry="formEntry"
      v-on:hideEntryDeleteConfirmModal="hideEntryDeleteConfirmModal"
    ></post-delete-modal>

    <post-details-modal
      v-bind:entryModalDetailsVisible="entryModalDetailsVisible"
      v-bind:detailsEntry="detailsEntry"
      v-on:hideEntryDetailsModal="hideEntryDetailsModal"
    ></post-details-modal>

  </div>
</template>

<script>

import { PostEntity as EntityClass } from '@/models/post';
import pageHeader from '@/components/administration/pageHeader';
import { FormUtils } from '@/components/administration/utils';

import postEditModal from './postEditModal';
import postDeleteModal from './postDeleteModal';
import postDetailsModal from './postDetailsModal';

export default {
  name: 'posts',
  data () {
    return {
      entryModalFormVisible: false,
      entryModalDeleteConfirmVisible: false,
      entryModalDetailsVisible: false,
      formEntry: () => {},
      detailsEntry: () => {},
    };
  },
  components: {
    pageHeader,
    postEditModal,
    postDeleteModal,
    postDetailsModal,
  },
  created () {
    if (this.$store.state.posts === null) {
      this.fetchData();
    }
  },
  computed: {
    entries: function () { return this.$store.state.posts },
    entriesCount: function () { return this.entries ? this.entries.length : 0 },
  },
  methods: {
    fetchData () {
      const entity = new EntityClass();
      return entity.fetch();
    },
    // ADD / EDIT
    addEntry: function () {
      this.editEntry();
    },
    editEntry: function (entry) {
      FormUtils.editEntry(this, {
        entry: entry,
        emptyEntry: EntityClass.emptyEntry()
      });
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
    },
    // DETAILS
    viewDetailsEntry: function (entry) {
      this.entryModalDetailsVisible = true;
      this.detailsEntry = Object.assign({}, entry);
    },
    hideEntryDetailsModal: function () {
      this.entryModalDetailsVisible = false;
      this.detailsEntry = null;
    }
  }
};
</script>

<style lang="scss">
  .table-admin {
    thead {
      th:last-of-type {
        width: 150px;
      }
    }
  }
</style>
