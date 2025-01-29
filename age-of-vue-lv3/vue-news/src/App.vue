<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '@/views/ToolBar.vue';

export default {
  components: {
    ToolBar
  }
};
</script>

<style></style>
