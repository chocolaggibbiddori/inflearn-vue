<template>
  <div>
    <ol>
      <li v-for="item in itemList" :key="item.id">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>
          <template v-if="item.user">
            - by
            <router-link :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </template>
          <template v-else-if="item.domain">
            - at
            {{ item.domain }}
          </template>
          {{ item.time_ago }}
        </small>
        <span>{{ item.points }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    itemList() {
      switch (this.$route.name) {
        case 'NewsView':
          return this.$store.getters.getNewsList;
        case 'AskView':
          return this.$store.getters.getAskList;
        case 'JobsView':
          return this.$store.getters.getJobList;
      }
    }
  },
  created() {
    switch (this.$route.name) {
      case 'NewsView':
        this.$store.dispatch('fetchNewsList');
        break;
      case 'AskView':
        this.$store.dispatch('fetchAskList');
        break;
      case 'JobsView':
        this.$store.dispatch('fetchJobList');
        break;
    }
  }
};
</script>

<style scoped></style>
