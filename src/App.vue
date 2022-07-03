<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './stores/user';
import Notification from './components/Notification.vue';
import { useRouter } from 'vue-router';
const store = useUserStore();
const router = useRouter();

const loginUser = ref<Object | null>();
const isSignedin = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    loginUser.value = user;
    if (!user) {
      store.$patch((state) => {
        state.isLogin = true;
        state.toastMessage = 'You must login again!';
      });
      router.push('/sign-in');
    }
  });
};

const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.

      router.push('/sign-in');
    })
    .catch((error) => {
      // An error happened.
    });
};
onMounted(() => {
  setTimeout(() => {
    store.$patch((state) => {
      state.isLogin = false;
    });
  }, 3000);
});

const closeNotification = (event: any) => {
  store.$patch((state) => {
    state.isLogin = event;
  });
};

onBeforeMount(() => {
  isSignedin();
});
</script>
<template>
  <Notification
    :show="store.isLogin"
    @close="closeNotification($event)"
    :is-success="true"
  />
  <header>
    <nav class="flex justify-between">
      <router-link to="/">
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </router-link>

      <div class="flex items-center space-x-8">
        <ul class="flex space-x-3">
          <li v-if="$route.path === '/register'">
            <router-link to="/sign-in"> Sign in </router-link>
          </li>
          <li v-if="$route.path === '/sign-in'">
            <router-link to="/register"> Register </router-link>
          </li>
        </ul>
        <button
          v-if="loginUser"
          @click="logout"
          class="py-2 px-8 bg-orange-500 rounded-md text-white"
        >
          Log out
        </button>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
#app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
