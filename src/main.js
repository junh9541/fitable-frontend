import { createApp } from 'vue';
import App from '../App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

// Add the icon to the library
library.add(faPenToSquare);

const app = createApp(App);

// Register FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
