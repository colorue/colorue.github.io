import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook)
library.add(faInstagram)
library.add(faGithub)
library.add(faDiscord)
library.add(faImages)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

