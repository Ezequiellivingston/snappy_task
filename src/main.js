import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import './styles/app.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
