<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">Categories</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-small is-success" @click="addCategory()">Add category</a>
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
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>
            <a class="button is-small is-primary is-outlined"
              @click="editCategory(category)"
            >
              <i class="fa fa-edit"></i>
            </a>
            <a class="button is-small is-danger is-outlined"
              @click="deleteCategory(category)"
            >
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <category-edit-modal
      v-bind:showCategoryModal="showCategoryModal"
      v-bind:categoryEdit="categoryEdit"
      v-on:hideCategoryModal="hideCategoryModal"
    ></category-edit-modal>

    <category-delete-modal
      v-bind:showCategoryDeleteConfirmModal="showCategoryDeleteConfirmModal"
      v-bind:categoryEdit="categoryEdit"
      v-on:hideCategoryDeleteConfirmModal="hideCategoryDeleteConfirmModal"
    ></category-delete-modal>

  </div>
</template>

<script>

import CategoryEntity from '@/models/category';
import categoryEditModal from './categoryEditModal';
import categoryDeleteModal from './categoryDeleteModal';

const EMPTY_CATEGORY = {
  name: '',
};

export default {
  name: 'categories',
  data () {
    return {
      showCategoryModal: false,
      showCategoryDeleteConfirmModal: false,
      categoryEdit: () => {},
    };
  },
  components: {
    categoryEditModal,
    categoryDeleteModal,
  },
  created () {
    if (this.$store.state.categories === null) {
      this.fetchData();
    }
  },
  computed: {
    categories: function () { return this.$store.state.categories },
    categoriesCount: function () { return this.$store.getters.categoriesCount },
  },
  methods: {
    fetchData () {
      const Category = new CategoryEntity({ vm: this });

      Category.fetch();
    },
    // ADD / EDIT
    addCategory: function () {
      this.editCategory();
    },
    editCategory: function (category) {
      if (category) {
        this.categoryEdit = Object.assign({}, category);
      } else {
        this.categoryEdit = Object.assign({}, EMPTY_CATEGORY);
      }
      this.showCategoryModal = true;
    },
    hideCategoryModal: function ({ fetchData }) {
      this.showCategoryModal = false;
      this.categoryEdit = {};

      if (fetchData) {
        this.fetchData();
      }
    },
    // DELETE
    deleteCategory: function (category) {
      this.showCategoryDeleteConfirmModal = true;
      this.categoryEdit = Object.assign({}, category);
    },
    hideCategoryDeleteConfirmModal: function ({ fetchData }) {
      this.showCategoryDeleteConfirmModal = false;
      this.categoryEdit = {};

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