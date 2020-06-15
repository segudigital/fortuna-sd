<template>
  <div class="locale-changer">
    <b-nav-item-dropdown :text="$t('nav.language')" right>
        <!-- <b-dropdown-item v-for="(lang, i) in $i18n.availableLocales"  :key="`Lang${i}`" :href="lang"
        @click.prevent="setLocale(lang)" >{{ lang }}</b-dropdown-item> -->
        <b-dropdown-item v-for="(lang, i) in $i18n.availableLocales"  :key="`Lang${i}`" :href="'/'.lang"
        @click="setLocale(lang)" >{{ lang }}</b-dropdown-item>
        <b-dropdown-item href="https://crwd.in/fortuna-en-seguridad-digital" target="_blank">{{$t('nav.help_translate')}}</b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang"></option>
    </select> -->
  </div>
</template>

<script>
export default {
//   name: 'locale-changer',
//   data () {
//     return {
//         // langs: ['es', 'en']
//     }
//   }
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
        }
    }
}
</script>