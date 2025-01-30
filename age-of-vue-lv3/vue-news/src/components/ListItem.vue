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
  props: ['itemList']
};
</script>

<style scoped></style>
