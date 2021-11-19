import Vue from 'vue'
import App from './app'
import router from './router'
import './plugins/quasar'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

// // Exemplo de glider em uma grade 10x10
// // ================================================

// import Grade from './helpers/Grade'

// const grade = new Grade(10, 10)

// grade.ativa(0, 0)
// grade.ativa(2, 0)
// grade.ativa(1, 1)
// grade.ativa(1, 2)
// grade.ativa(2, 1)

// console.log(String(grade))

// for (let i = 0; i < 25; i++) {
//   grade.atualiza()
//   console.log(String(grade))
// }
