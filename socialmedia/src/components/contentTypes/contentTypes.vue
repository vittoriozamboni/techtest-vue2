<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">Content Types</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-small is-success" @click="addContentType()">Add content type</a>
        </div>
      </div>
    </nav>

    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
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

import ContentTypeEntity from '@/models/contentType';
import contentTypeEditModal from './contentTypeEditModal';
import contentTypeDeleteModal from './contentTypeDeleteModal';

const EMPTY_CATEGORY = {
  name: '',
};

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
    contentTypeEditModal,
    contentTypeDeleteModal,
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
      const ContentType = new ContentTypeEntity({ vm: this });

      ContentType.fetch();
    },
    // ADD / EDIT
    addContentType: function () {
      this.editContentType();
    },
    editContentType: function (contentType) {
      if (contentType) {
        this.contentTypeEdit = Object.assign({}, contentType);
      } else {
        this.contentTypeEdit = Object.assign({}, EMPTY_CATEGORY);
      }
      this.showContentTypeModal = true;
    },
    hideContentTypeModal: function ({ fetchData }) {
      this.showContentTypeModal = false;
      this.contentTypeEdit = {};

      if (fetchData) {
        this.fetchData();
      }
    },
    // DELETE
    deleteContentType: function (contentType) {
      this.showContentTypeDeleteConfirmModal = true;
      this.contentTypeEdit = Object.assign({}, contentType);
    },
    hideContentTypeDeleteConfirmModal: function ({ fetchData }) {
      this.showContentTypeDeleteConfirmModal = false;
      this.contentTypeEdit = {};

      if (fetchData) {
        this.fetchData();
      }
    }
  }
};
</script>

<style lang="scss">
.table {
  thead {
    th:first-of-type {
      width: 50px;
    }
    th:last-of-type {
      width: 100px;
    }
  }
  tbody {
    tr {
      td:first-of-type {
        text-align: right;
      }
      td:last-of-type {
        text-align: center;
      }
    }
  }
}
</style>