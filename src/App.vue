<template>
    <div id="app">
        <header id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="#">#SeguridadDigital</b-navbar-brand> 
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
        <AboutUs />
    <router-view/>
    </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
import AboutUs from "@/components/AboutUs.vue"
export default {
    components: {
        LanguageSwitcher,
        AboutUs
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700;900&display=swap');
/* @import url('../assets/Inconsolata-VariableFont_wdthwght.ttf'); */
body {
    font-family: 'Inconsolata', monospace;
}
</style>
