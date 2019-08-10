<template>
  <div id="layout">
    <page-header></page-header>
    <page-left></page-left>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import PageLeft from './PageLeft.vue'
import PageFooter from './PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageLeft,
    PageFooter
  }
}
</script>
