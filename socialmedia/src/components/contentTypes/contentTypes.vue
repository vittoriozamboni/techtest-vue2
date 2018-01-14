<template>
  <div class="container">
    <page-header title="Content Types">
      <div slot="actions">
        <a class="button is-small is-success" @click="addContentType()">Add content type</a>
      </div>
    </page-header>

    <table class="table table-admin is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contentType in contentTypes" :key="contentType.id">
          <td>{{ contentType.id }}</td>
          <td>{{ contentType.name }}</td>
          <td>
            <a class="button is-small is-primary is-outlined"
              @click="editContentType(contentType)"
            >
              <i class="fa fa-edit"></i>
            </a>
            <a class="button is-small is-danger is-outlined"
              @click="deleteContentType(contentType)"
            >
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <content-type-edit-modal
      v-bind:showContentTypeModal="showContentTypeModal"
      v-bind:contentTypeEdit="contentTypeEdit"
      v-on:hideContentTypeModal="hideContentTypeModal"
    ></content-type-edit-modal>

    <content-type-delete-modal
      v-bind:showContentTypeDeleteConfirmModal="showContentTypeDeleteConfirmModal"
      v-bind:contentTypeEdit="contentTypeEdit"
      v-on:hideContentTypeDeleteConfirmModal="hideContentTypeDeleteConfirmModal"
    ></content-type-delete-modal>

  </div>
</template>

<script>


import { ContentTypeEntity as Entity } from '@/models/contentType';
import pageHeader from '@/components/administration/pageHeader';
import { FormUtils } from '@/components/administration/utils';

import contentTypeEditModal from './contentTypeEditModal';
import contentTypeDeleteModal from './contentTypeDeleteModal';

export default {
  name: 'content-types',
  data () {
    return {
      showContentTypeModal: false,
      showContentTypeDeleteConfirmModal: false,
      contentTypeEdit: () => {},
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
    contentTypes: function () { return this.$store.state.contentTypes },
    contentTypesCount: function () { return this.$store.getters.contentTypesCount },
  },
  methods: {
    fetchData () {
      const ContentType = new Entity({ vm: this });

      ContentType.fetch();
    },
    // ADD / EDIT
    addContentType: function () {
      this.editContentType();
    },
    editContentType: function (contentType) {
      FormUtils.editEntry(this, {
        entry: contentType,
        formVariableName: 'contentTypeEdit',
        emptyEntry: Entity.emptyEntry()
      });
      this.showContentTypeModal = true;
    },
    hideContentTypeModal: function ({ fetchData }) {
      this.showContentTypeModal = false;
      FormUtils.closeModalForm(this, { formVariableName: 'contentTypeEdit', fetchData });
    },
    // DELETE
    deleteContentType: function (contentType) {
      this.showContentTypeDeleteConfirmModal = true;
      this.contentTypeEdit = Object.assign({}, contentType);
    },
    hideContentTypeDeleteConfirmModal: function ({ fetchData }) {
      this.showContentTypeDeleteConfirmModal = false;
      FormUtils.closeModalForm(this, { formVariableName: 'contentTypeEdit', fetchData });
    }
  }
};
</script>
