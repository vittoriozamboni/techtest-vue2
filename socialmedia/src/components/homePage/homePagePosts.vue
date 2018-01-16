<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent"
       v-for="post in posts" :post="post" :key="post.id"
       @click="viewDetailsEntry(post)"
    >
      <article class="tile is-info is-child notification">
        <h3 class="title is-5">{{ post.title }}</h3>
        <p>
          <div class="tags has-addons">
            <span class="tag is-primary"><i class="fa fa-user"></i></span>
            <span class="tag">{{ post._display.created_by }}</span>
          </div>
        </p>
      </article>
    </div>

    <post-details-modal
      v-bind:entryModalDetailsVisible="entryModalDetailsVisible"
      v-bind:detailsEntry="detailsEntry"
      v-on:hideEntryDetailsModal="hideEntryDetailsModal"
    ></post-details-modal>

  </div>
</template>

<script>

import PostDetailsModal from '@/components/posts/postDetailsModal';

export default {
  name: 'home-page-posts',
  props: ['posts'],
  components: {
    PostDetailsModal
  },
  data () {
    return {
      entryModalDetailsVisible: false,
      detailsEntry: null
    };
  },
  methods: {
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

<<style lang="scss">
  .tile.is-parent {
    cursor: pointer;
  }
</style>
