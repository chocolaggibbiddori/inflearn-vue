<template>
  <li>
    <div class="post-title">{{ post.title }}</div>
    <div class="post-contents">{{ post.contents }}</div>
    <div class="post-time">
      {{ post.createdAt }}
      <ion-icon name="create-outline" @click="editPost"></ion-icon>
      <ion-icon name="trash" @click="deletePost"></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/post';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    editPost() {
      this.$router.push(`/posts/${this.post._id}`);
    },
    deletePost() {
      if (confirm('Are you sure you want to delete this post?')) {
        deletePost(this.post._id).then(() => this.$emit('refresh'));
      }
    }
  }
};
</script>
