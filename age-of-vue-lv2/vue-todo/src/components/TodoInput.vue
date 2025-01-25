<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">add</button>

    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고!</h3>
      <div slot="body">무언가를 입력하세요.</div>
      <footer slot="footer">copy right.</footer>
    </modal>
  </div>
</template>

<script>
import Modal from '@/common/Modal.vue';

export default {
  name: 'TodoInput',
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem === '') {
        this.showModal = true;
        return;
      }

      this.$store.commit('addTodo', this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
};
</script>

<style scoped></style>
