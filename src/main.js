import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

// Import CSS styles
require('@/assets/css/style.css');

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')