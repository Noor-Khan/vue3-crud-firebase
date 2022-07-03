<script setup lang="ts">
import UserTable from '../components/UserTable.vue';
import UserModal from '../components/UserModal.vue';
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const store = useUserStore();

interface getUser {
  show: Boolean;
  user: Object;
}

const isVisible = ref<Boolean>(false);
const modalText = ref<String>();
const selectedPerson = ref<object>({});
const openModal = (event: any) => {
  isVisible.value = event.show;
  modalText.value = event.text;
  selectedPerson.value = {};
};
const editModal = (event: any) => {
  isVisible.value = event.show;
  modalText.value = event.text;
  selectedPerson.value = event.user;
};
</script>
<template>
  <header>
    <div class="wrapper mt-32">
      <UserTable @openModal="openModal" @editModal="editModal" />
      <UserModal
        :isShow="isVisible"
        @closeModal="isVisible = $event"
        :person="selectedPerson"
        :text="modalText"
      />
    </div>
  </header>
</template>
