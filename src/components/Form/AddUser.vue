<script setup lang="ts">
import type { User } from '../../types/user';
import { ref } from 'vue';

interface Props {
  person: User | any;
}

const emit = defineEmits<{
  (e: 'change', user: User): void;
}>();

const props = defineProps<Props>();

const user = ref<User>({
  name: props.person.name,
  title: props.person.title,
  email: props.person.email,
  role: props.person.role,
});
</script>

<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-6">
        <form action="#" method="POST" @change="emit('change', user)">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="name"
                    class="block text-sm font-medium capitalize text-gray-700"
                    >Name</label
                  >
                  <input
                    v-model="user.name"
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-gray-200 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="title"
                    class="block text-sm font-medium capitalize text-gray-700"
                    >title</label
                  >
                  <select
                    v-model="user.title"
                    id="title"
                    name="title"
                    autocomplete="title-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option>Front-end Developer</option>
                    <option>Back-end Developer</option>
                    <option>UX/UI Designer</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="email-address"
                    class="block text-sm font-medium capitalize text-gray-700"
                    >Email address</label
                  >
                  <input
                    v-model="user.email"
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md py-2 px-3 border"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="role"
                    class="block text-sm font-medium capitalize text-gray-700"
                    >role</label
                  >
                  <select
                    v-model="user.role"
                    id="role"
                    name="role"
                    autocomplete="role-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>User</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
