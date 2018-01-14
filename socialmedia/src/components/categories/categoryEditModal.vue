<template>
  <modal class="modal category-form"
    v-bind:show="showCategoryModal"
    v-on:closeModal="hideModal"
  >
    <h1 slot="title">Manage category</h1>
    <div slot="body">

      <div v-if="categoryEdit.id" class="title is-5" >Edit Category (id: {{ categoryEdit.id }})</div>
      <div v-else class="title is-5" >Add Category</div>

      <div class="field is-horizontal">

        <div class="field-label is-small">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-small" v-model="categoryEdit.name" type="text" placeholder="Category name">
            </div>
          </div>
        </div>

      </div>

    </div>
    <div slot="footer">
      <button class="button is-success" @click="saveCategory">Save changes</button>
      <button class="button" @click="hideModal">Cancel</button>
    </div>
  </modal>
</template>

<script>

import { APPLICATION_SET_STATUS } from '@/store/actionTypes';

import Modal from '@/components/modal';


export default {
  name: 'category-edit-modal',
  props: ['showCategoryModal', 'categoryEdit'],
  components: {
    Modal,
  },
  data () {
    return {
    };
  },
  methods: {
    hideModal: function (fetchData) {
      this.$emit('hideCategoryModal', { fetchData });
    },
    saveCategory: function () {
      const category = Object.assign({}, this.categoryEdit);
      const store = this.$store;

      store.dispatch(APPLICATION_SET_STATUS, { status: 'loading' });

      if (category.id) {
        // EDIT
        this.$http.put(`category/${category.id}/`, category).then(response => {
          store.dispatch(APPLICATION_SET_STATUS, { status: 'loaded' });
          this.hideModal(true);
        }, response => {
          store.dispatch(APPLICATION_SET_STATUS, { status: 'not-loaded' });
          this.hideModal();
        });
      } else {
        // ADD
        this.$http.post('category/', category).then(response => {
          store.dispatch(APPLICATION_SET_STATUS, { status: 'loaded' });
          this.hideModal(true);
        }, response => {
          store.dispatch(APPLICATION_SET_STATUS, { status: 'not-loaded' });
          this.hideModal();
        });
      }
    },

  }
};
</script>

