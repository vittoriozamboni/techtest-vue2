<template>
  <div class="container">
    <page-header title="Categories">
      <div slot="actions">
        <a class="button is-small is-success" @click="addCategory()">Add category</a>
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

import { CategoryEntity as Entity } from '@/models/category';
import pageHeader from '@/components/administration/pageHeader';
import { FormUtils } from '@/components/administration/utils';

import categoryEditModal from './categoryEditModal';
import categoryDeleteModal from './categoryDeleteModal';

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
    pageHeader,
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
      const Category = new Entity({ vm: this });

      Category.fetch();
    },
    // ADD / EDIT
    addCategory: function () {
      this.editCategory();
    },
    editCategory: function (category) {
      FormUtils.editEntry(this, {
        entry: category,
        formVariableName: 'categoryEdit',
        emptyEntry: Entity.emptyEntry()
      });
      this.showCategoryModal = true;
    },
    hideCategoryModal: function ({ fetchData }) {
      this.showCategoryModal = false;
      FormUtils.closeModalForm(this, { formVariableName: 'categoryEdit', fetchData });
    },
    // DELETE
    deleteCategory: function (category) {
      this.showCategoryDeleteConfirmModal = true;
      this.categoryEdit = Object.assign({}, category);
    },
    hideCategoryDeleteConfirmModal: function ({ fetchData }) {
      this.showCategoryDeleteConfirmModal = false;
      FormUtils.closeModalForm(this, { formVariableName: 'categoryEdit', fetchData });
    }
  }
};
</script>
