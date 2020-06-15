<template>
  <b-container class="d-flex align-items-center justify-content-center">
    <b-row class="row">
      <b-col md="7" class="text-left">
        <h1>{{ $t('hello.title') }}</h1>
        <div class="mt-4" v-html="$t('hello.text')" /> <!-- esto hay que arreglarlo (v-html), mostrar etiquetas html desde el json, vue dice que hacerlo asi podria ocacionar vulnerabilidades-->
        <b-button block variant="primary" size="lg" :to="`/${$i18n.locale}/quiz`">{{$t('hello.acction_button')}}</b-button>
        <!-- <router-link to="quiz" block variant="primary">{{$t('hello.acction_button')}}</router-link> -->
      </b-col>
      <b-col>
        <b-img :src="require('@/assets/adivina_sin_fondo.svg')" fluid :alt="$t('hello.alt_imagen')" ></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Hello',
  props: {
  }
}

</script>

<style scoped>
/* html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
} */
.bg {
  background-color: #5C6BC0 !important;
}
h1 {
  font-size: 2em;
}
</style>
