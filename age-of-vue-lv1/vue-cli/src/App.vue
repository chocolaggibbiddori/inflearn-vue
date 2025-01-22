<template>
  <div>
    <app-header v-bind:data="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  data() {
    return {
      str: 'Header'
    }
  },
  components: {
    AppHeader
  },
  methods: {
    renewStr() {
      this.str = 'Hi';
    }
  }
}
</script>

<style>

</style>
