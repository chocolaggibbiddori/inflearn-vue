<template>
  <div>
    <h1 class="page-header">회원가입 페이지</h1>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm
  }
};
</script>

<style scoped></style>
