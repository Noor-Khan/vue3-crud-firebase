import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import './assets/base.css';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC2GXPkbBUJ50cXQMzb3eseJ3M_pXZG7EU',
    authDomain: 'test-91810.firebaseapp.com',
    databaseURL: 'https://test-91810.firebaseio.com',
    projectId: 'test-91810',
    storageBucket: 'test-91810.appspot.com',
    messagingSenderId: '906560298793',
    appId: '1:906560298793:web:73dae4af400c78baf92138',
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router);

app.mount('#app')
