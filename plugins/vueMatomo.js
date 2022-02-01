import Vue from 'vue'
import VueMatomo from 'vue-matomo'

// For configurations visit:  https://github.com/AmazingDreams/vue-matomo
export default ({ app }) => {
  Vue.use(VueMatomo, {
    router: app.router,
    host: 'https://matomo.geoloogia.info/',
    // siteId: 3, Todo: Create new site in matomo app

    /** Other configuration options **/
  })
}
