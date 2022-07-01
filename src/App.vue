<script setup lang="ts">
import UserTable from './components/UserTable.vue';
import UserModal from './components/UserModal.vue';
import { ref } from 'vue';

const isVisible = ref<Boolean>(false);
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="text-center">
        <h3
          class="text-2xl rounded-md shadow-lg uppercase text-white inline-block py-3 px-6 font-bold bg-green-500"
        >
          Vue 3 crud with Firebase
        </h3>
      </div>

      <UserTable @openModal="isVisible = $event" />
      <UserModal :isShow="isVisible" @closeModal="isVisible = $event" />
    </div>
  </header>

  <main></main>
</template>

<style>
#app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
