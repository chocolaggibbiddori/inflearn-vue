<template>
  <div>
    <section>
      <h2>{{ item.title }}</h2>
      <user-profile>
        <template #userId>
          user:
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </template>
      </user-profile>
      <small>{{ item.time_ago }}</small>
    </section>
    <hr />
    <section>
      <p v-html="item.content"></p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      item: 'getItem'
    })
  },
  created() {
    this.$store.dispatch('fetchItem', this.$route.query.id);
  }
};
</script>

<style scoped></style>
