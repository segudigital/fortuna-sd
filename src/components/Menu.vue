<template>
  <header id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
          <b-navbar-brand to="/">#SeguridadDigital</b-navbar-brand> 
          <!-- <b-navbar-brand :to="`/${$i18n.locale}/`">#SeguridadDigital</b-navbar-brand>  -->
          <!-- <b-navbar-brand :href="`/${$i18n.locale}/`">#SeguridadDigital</b-navbar-brand>  -->
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                  <b-nav-item v-b-toggle.sidebar-right.sidebar-backdrop>{{$t('nav.about')}}</b-nav-item>
                  <LanguageSwitcher />
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </header>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"

export default {
    name: "Menu",
    components: {
        LanguageSwitcher
    } 
}
</script>
<style scoped>
.navbar {
    background-color: #00000082 !important;
}
.collapse.show{
  background-color: rgba(0, 0, 0, 0.8);
}
</style>