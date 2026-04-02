import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGlobe, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faGlobe, faCircle, faGithub, faLinkedin)
const app = createApp(App).use(router)
app.component('fa-icon', FontAwesomeIcon)
app.mount('#app')
