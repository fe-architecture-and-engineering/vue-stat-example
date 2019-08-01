import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function sendLog(event,element){
  const img = new Image();
  img.src = `http://www.app.com/stat/?event=${event}&element=${element}`;
}

Vue.directive('stat', {
  bind(el,binding) {
    const eventName = binding.arg;
    const {event,element} = binding.value;
    eventName&&el.addEventListener(eventName,function(){
      sendLog(event,element);
    },false);
  },
  unbind(){
    //...
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
