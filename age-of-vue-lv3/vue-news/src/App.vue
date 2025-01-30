<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loading"></spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from '@/utils/bus';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loading: false
    };
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    }
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
