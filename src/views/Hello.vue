<template>
      <b-container class="d-flex align-items-center justify-content-center">
        <b-row class="row">
          <b-col lg="7" class="text-left">
            <h1>{{ $t('hello.title') }}</h1>
            <div v-html="$t('hello.text')" /> <!-- esto hay que arreglarlo (v-html), mostrar etiquetas html desde el json, vue dice que hacerlo asi podria ocacionar vulnerabilidades-->
            <b-button block variant="primary" size="lg" :href="`/${$i18n.locale}/quiz`">{{$t('hello.acction_button')}}</b-button>
          </b-col>
          <b-col>
            <b-img src="/adivina_sin_fondo.svg" fluid :alt="$t('hello.alt_imagen')" ></b-img>
          </b-col>
        </b-row>
      </b-container>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
} */
.bg {
  background-color: #5C6BC0;
}
</style>
