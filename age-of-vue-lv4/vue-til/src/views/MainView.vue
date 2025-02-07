<template>
  <div class="main list-container contents">
    <h1 class="page-header">Today I Learned</h1>
    <LoadingSpinner v-if="isLoading" />
    <ul v-else>
      <PostListItem v-for="post in postList" :key="post._id" :post="post" />
    </ul>

    <router-link to="/add" class="create-button">
      <ion-icon name="add-outline"></ion-icon>
    </router-link>
  </div>
</template>

<script>
import { getPostList } from '@/api';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: { LoadingSpinner, PostListItem },
  data() {
    return {
      postList: [],
      isLoading: true
    };
  },
  created() {
    this.fetchPostList();
  },
  methods: {
    async fetchPostList() {
      const { data } = await getPostList();
      this.postList = data.posts;

      this.isLoading = false;
    }
  }
};
</script>
