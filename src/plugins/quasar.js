import Vue from 'vue'

import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/mdi-v5.js'
import '@quasar/extras/mdi-v5/mdi-v5.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {},
  iconSet: iconSet,
})
