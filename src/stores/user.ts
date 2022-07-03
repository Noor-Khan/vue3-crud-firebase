import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLogin: false,
    user: null,
    toastMessage: null,
    users: [
      {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Manager',
      },
    ]
  }),
  getters: {
    getUsers: (state) => state.users
  },
  actions: {
    increment() {
    }
  }
})

export {
  useUserStore
}
