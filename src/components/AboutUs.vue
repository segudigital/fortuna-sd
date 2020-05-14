<template>
    <b-sidebar id="sidebar-right" title="" right shadow backdrop>
        <div class="px-3 py-2">
        <p>{{$t('about.text')}}</p>
      <div v-for="credit in $t('about.credits')" :key="credit.index" id="credit-img">
        <b-link :href="credit.url" target="_blank"><b-img :src="credit.img" :alt="credit.name" fluid></b-img></b-link>
        <hr>
      </div>
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