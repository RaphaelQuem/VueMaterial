<template>
  <div>
    <md-tabs class="md-elevation-3" md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-posts" md-label="About" to="/about"></md-tab>
    </md-tabs>
  </div>
</template>

<script>

import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
export default {
  name: 'Header'
}
</script>


