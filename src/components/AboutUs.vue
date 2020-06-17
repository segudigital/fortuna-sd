<template>
    <b-sidebar id="sidebar-right" title="" right shadow backdrop>
        <div class="px-3 py-2">
          <h4>{{$t('about.title')}}</h4>
          <p>{{$t('about.text')}}</p>
        
          <div v-for="credit in $t('about.credits')" :key="credit.index" id="credit-img">
            <b-link :href="credit.url" target="_blank"><b-img :src="credit.img" :alt="credit.name" fluid></b-img></b-link>
            <hr>
          </div>
          <!-- <p>{{$t('about.sub_text')}}</p> -->
          <p class="my-5">
            Si tienes cualquier duda, quieres agendar una llamada o taller, escríbenos a <a href="https://twitter.com/segudigital" target="_blank">@segudigital en Twitter</a> o envíanos un correo a hola[@]segudigital[.]org
          </p>
          <p class="my-5">Ilustraciónes por  <a href="https://www.behance.net/el_nedcio" target="_blank">Ned Torres</a></p>
          <p class="my-5">
            <small><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://segudigital.org" property="cc:attributionName" rel="cc:attributionURL">SeguDigital</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/segudigital/fortuna-sd" rel="dct:source">https://github.com/segudigital/fortuna-sd</a>.</small>
          </p>

        </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
<style scoped>
.sidebar-right {
  background-color: #3096ffe3 !important;
}
.credit-img {
  max-height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
img {
  max-height: 4rem;
}
</style>