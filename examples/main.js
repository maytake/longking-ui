import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss';
import '../components/css/card.scss';
import '../components/css/loading.scss';
import Demo from '../components/lib/demo/index'; 
import Card from '../components/lib/card/index'; 
import Loading from '../components/lib/loading/index'; 

Vue.use(Demo);
Vue.use(Card);
Vue.use(Loading);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
