<template>
    <section class="section">
    <div class="container-fluid">
      <h4 class="title is-4">{{ post.title }}</h4>

      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <label class="tag is-primary tag-category">{{ post._display.category }}</label>
            <h6 class="title is-6">{{ post._display.social_media }}</h6>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="tags has-addons">
              <span class="tag is-primary"><i class="fa fa-user"></i></span>
              <span class="tag">{{ post._display.created_by }}</span>
            </div>
          </div>
        </div>
      </nav>

      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <span class="tag is-link" v-for="(contentType, index) in post._display.content_types" :key="index">{{ contentType }}</span>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <span class="tag is-light" v-for="(tag, index) in post.tags" :key="index">{{ tag }}</span>
          </div>
        </div>
      </nav>

      <article class="message">
        <div class="message-body">{{ post.content }}</div>
      </article>

    </div>
  </section>
</template>

<script>
export default {
  name: 'post-details',
  props: ['post']
};
</script>

<style lang="scss">
  .section {
    padding: 1.5em;

    .level:not(:last-child) {
      margin-bottom: 0.8em;
    }
  }
  .tag {
    margin-right: 0.6em;
  }
</style>
